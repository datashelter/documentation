(function () {
  function cleanPath(value) {
    var source = String(value || '').trim().replace(/\\/g, '/');
    if (!source) return '';
    var absolute = source.charAt(0) === '/';
    var parts = source.split('/');
    var cleaned = [];
    for (var i = 0; i < parts.length; i += 1) {
      var part = parts[i];
      if (!part || part === '.') continue;
      if (part === '..') {
        if (cleaned.length && cleaned[cleaned.length - 1] !== '..') cleaned.pop();
        else if (!absolute) cleaned.push(part);
      } else {
        cleaned.push(part);
      }
    }
    var result = (absolute ? '/' : '') + cleaned.join('/');
    return result || (absolute ? '/' : '.');
  }

  function toBackupPath(value, root) {
    var path = String(value || '').trim();
    return path ? cleanPath(path.charAt(0) === '/' ? path : cleanPath(root) + '/' + path) : '';
  }

  function splitPatterns(value) {
    return String(value || '').split(/[\n,]/).map(function (pattern) {
      return pattern.trim();
    }).filter(Boolean);
  }

  function globToRegex(pattern) {
    var output = '^';
    for (var i = 0; i < pattern.length; i += 1) {
      var character = pattern.charAt(i);
      if (character === '*') {
        while (pattern.charAt(i + 1) === '*') i += 1;
        output += '.*';
      } else if (character === '?') {
        output += '.';
      } else if (character === '[') {
        var end = pattern.indexOf(']', i + 1);
        if (end === -1) output += '\\[';
        else {
          var characterClass = pattern.slice(i + 1, end);
          output += '[' + (characterClass.charAt(0) === '!' ? '^' + characterClass.slice(1) : characterClass) + ']';
          i = end;
        }
      } else if (character === '{') {
        var braceEnd = pattern.indexOf('}', i + 1);
        if (braceEnd === -1) output += '\\{';
        else {
          var alternatives = pattern.slice(i + 1, braceEnd).split(',').map(function (alternative) {
            return alternative.replace(/[\\^$+.|(){}]/g, '\\$&');
          });
          output += '(?:' + alternatives.join('|') + ')';
          i = braceEnd;
        }
      } else {
        output += /[\\^$+.|(){}]/.test(character) ? '\\' + character : character;
      }
    }
    return new RegExp(output + '$');
  }

  function matches(path, pattern) {
    pattern = cleanPath(pattern);
    if (!pattern) return false;
    if (/[*?\[]/.test(pattern) || pattern.indexOf('{') !== -1) {
      try { return globToRegex(pattern).test(path); } catch (error) { return false; }
    }
    return path === pattern || path.indexOf(pattern + '/') === 0;
  }

  function matchingRule(path, patterns, root, checkParents) {
    var candidates = [{ path: path, parent: false }];
    if (checkParents) {
      var parent = path;
      while (parent.indexOf('/') > 0 && parent !== cleanPath(root)) {
        parent = parent.slice(0, parent.lastIndexOf('/'));
        candidates.push({ path: parent, parent: true });
      }
    }
    for (var i = 0; i < candidates.length; i += 1) {
      for (var j = 0; j < patterns.length; j += 1) {
        var absolute = toBackupPath(patterns[j], root);
        if (matches(candidates[i].path, absolute)) {
          return { pattern: patterns[j], matchedPath: candidates[i].path, parent: candidates[i].parent };
        }
      }
    }
    return null;
  }

  function shellQuote(value) {
    return "'" + String(value).replace(/'/g, "'\\\"'\\\"'") + "'";
  }

  function buildCommand(root, includes, excludes) {
    var command = 'snaper backup files --path ' + shellQuote(root);
    if (includes.length) command += ' --include ' + shellQuote(includes.join(','));
    if (excludes.length) command += ' --exclude ' + shellQuote(excludes.join(','));
    return command;
  }

  function yamlList(values) {
    return values.length ? values.map(function (value) { return '  - ' + JSON.stringify(value); }).join('\n') : '[]';
  }

  function tokenizeCommand(command) {
    var tokens = [], current = '', quote = '', escaped = false;
    String(command || '').split('').forEach(function (character) {
      if (escaped) { current += character; escaped = false; }
      else if (character === '\\') escaped = true;
      else if (quote) { if (character === quote) quote = ''; else current += character; }
      else if (character === '"' || character === "'") quote = character;
      else if (/\s/.test(character)) { if (current) { tokens.push(current); current = ''; } }
      else current += character;
    });
    if (current) tokens.push(current);
    return tokens;
  }

  function readCommandOption(tokens, names) {
    for (var i = 0; i < tokens.length; i += 1) {
      for (var j = 0; j < names.length; j += 1) {
        if (tokens[i] === names[j]) return tokens[i + 1] || '';
        if (tokens[i].indexOf(names[j] + '=') === 0) return tokens[i].slice(names[j].length + 1);
      }
    }
    return null;
  }

  function createFilterBuilder() {
    var builder = document.getElementById('snaper-filter-builder');
    if (!builder || builder.dataset.initialized === 'true') return;
    builder.dataset.initialized = 'true';
    builder.innerHTML =
      '<div class="snaper-filter-builder__intro"><strong>Filter builder</strong><span>Edit the command, then check the sample paths.</span></div>' +
      '<div class="snaper-filter-builder__layout"><div class="snaper-filter-builder__controls">' +
      '<label class="snaper-filter-builder__command-input">Command<textarea data-filter-command-input rows="2" spellcheck="false">snaper backup files --path /srv/app --exclude node_modules,public,*.log</textarea></label>' +
      '<label class="snaper-filter-builder__tree">Sample paths <small>one relative path per line</small><textarea data-filter-tree rows="5">src/main.go\nnode_modules/react/index.js\npublic/index.html\nlogs/app.log\nREADME.md</textarea></label>' +
      '<details class="snaper-filter-builder__advanced"><summary>Edit include and exclude lists separately</summary><div class="snaper-filter-builder__fields">' +
      '<label class="snaper-filter-builder__root">Backup root<input data-filter-root value="/srv/app" spellcheck="false"></label>' +
      '<label>Include <small>optional</small><input data-filter-include placeholder="src, docs" spellcheck="false"></label>' +
      '<label>Exclude <small>comma separated</small><input data-filter-exclude value="node_modules,public,*.log" spellcheck="false"></label>' +
      '</div></details><div class="snaper-filter-builder__actions"><button type="button" data-filter-reset>Reset</button></div>' +
      '<details class="snaper-filter-builder__yaml"><summary>Show configuration YAML</summary><pre><code data-filter-yaml></code></pre></details></div>' +
      '<div class="snaper-filter-builder__preview"><h4>Preview</h4><div class="snaper-filter-builder__legend"><span class="is-backed-up">Backed up</span><span class="is-excluded">Ignored</span><span class="is-not-selected">Not selected</span></div><div data-filter-results></div></div></div>';

    var rootInput = builder.querySelector('[data-filter-root]');
    var includeInput = builder.querySelector('[data-filter-include]');
    var excludeInput = builder.querySelector('[data-filter-exclude]');
    var treeInput = builder.querySelector('[data-filter-tree]');
    var commandInput = builder.querySelector('[data-filter-command-input]');
    var yamlOutput = builder.querySelector('[data-filter-yaml]');
    var results = builder.querySelector('[data-filter-results]');
    var defaults = { root: rootInput.value, include: includeInput.value, exclude: excludeInput.value, tree: treeInput.value };

    function render(updateCommand) {
      var root = cleanPath(rootInput.value);
      var includes = splitPatterns(includeInput.value);
      var excludes = splitPatterns(excludeInput.value);
      if (updateCommand) commandInput.value = buildCommand(root, includes, excludes);
      yamlOutput.textContent = 'included_paths:\n' + yamlList(includes) + '\nexcluded_paths:\n' + yamlList(excludes);
      var table = document.createElement('table');
      table.innerHTML = '<thead><tr><th>Sample path</th><th>Result</th><th>Why</th></tr></thead>';
      var body = document.createElement('tbody');
      String(treeInput.value || '').split('\n').map(function (path) { return path.trim(); }).filter(Boolean).forEach(function (samplePath) {
        var path = toBackupPath(samplePath, root);
        var includeRule = includes.length ? matchingRule(path, includes, root, false) : null;
        var excludeRule = matchingRule(path, excludes, root, true);
        var state = includeRule || !includes.length ? 'backed up' : 'not selected';
        var className = state === 'backed up' ? 'is-backed-up' : 'is-not-selected';
        var reason = includeRule ? 'matches include rule ' + includeRule.pattern : (includes.length ? 'does not match an include rule' : 'no include filter');
        if (excludeRule) {
          state = 'ignored'; className = 'is-excluded'; reason = 'matches exclude rule ' + excludeRule.pattern;
          if (excludeRule.parent) reason += ' on parent directory ' + excludeRule.matchedPath;
        }
        var row = document.createElement('tr');
        [samplePath, state, reason].forEach(function (value, index) {
          var cell = document.createElement('td'); cell.textContent = value;
          if (index === 1) cell.className = className;
          row.appendChild(cell);
        });
        body.appendChild(row);
      });
      table.appendChild(body);
      results.replaceChildren(table);
    }

    function syncFromCommand() {
      var tokens = tokenizeCommand(commandInput.value);
      var commandPath = readCommandOption(tokens, ['--path', '-p']);
      if (commandPath) rootInput.value = commandPath;
      includeInput.value = readCommandOption(tokens, ['--include']) || '';
      excludeInput.value = readCommandOption(tokens, ['--exclude']) || '';
      render(false);
    }

    [rootInput, includeInput, excludeInput].forEach(function (input) { input.addEventListener('input', function () { render(true); }); });
    treeInput.addEventListener('input', function () { render(false); });
    commandInput.addEventListener('input', syncFromCommand);
    builder.querySelector('[data-filter-reset]').addEventListener('click', function () {
      rootInput.value = defaults.root; includeInput.value = defaults.include; excludeInput.value = defaults.exclude; treeInput.value = defaults.tree;
      commandInput.value = buildCommand(defaults.root, splitPatterns(defaults.include), splitPatterns(defaults.exclude));
      render(false);
    });
    render(false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createFilterBuilder);
  else createFilterBuilder();
  document.addEventListener('docmd:page-mounted', createFilterBuilder);
})();
