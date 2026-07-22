(function () {
  var ANNOUNCEMENT_DISMISSED_KEY = 'ds-announcement-dismissed';

  function isAnnouncementDismissed() {
    try {
      return window.localStorage.getItem(ANNOUNCEMENT_DISMISSED_KEY) === '1';
    } catch (error) {
      return false;
    }
  }

  function dismissAnnouncement() {
    try {
      window.localStorage.setItem(ANNOUNCEMENT_DISMISSED_KEY, '1');
    } catch (error) {
      // no-op
    }
    document.body.classList.add('ds-announcement-hidden');
    var bar = document.getElementById('ds-announcement-bar');
    if (bar) {
      bar.remove();
    }
  }

  function ensureAnnouncementBar() {
    if (isAnnouncementDismissed()) {
      document.body.classList.add('ds-announcement-hidden');
      var dismissedBar = document.getElementById('ds-announcement-bar');
      if (dismissedBar) {
        dismissedBar.remove();
      }
      return;
    }

    document.body.classList.remove('ds-announcement-hidden');

    var existing = document.getElementById('ds-announcement-bar');
    if (existing) {
      return;
    }

    var bar = document.createElement('div');
    bar.id = 'ds-announcement-bar';
    bar.className = 'ds-announcement-bar';
    bar.innerHTML =
      '<span class="ds-announcement-text">🎉 You can now back up one server and enjoy 10GB storage for free, forever.</span>' +
      '<a class="ds-announcement-cta" href="https://app.datashelter.tech/auth/register">Create free account</a>' +
      '<button class="ds-announcement-close" type="button" aria-label="Close announcement">✕</button>';

    var closeButton = bar.querySelector('.ds-announcement-close');
    if (closeButton) {
      closeButton.addEventListener('click', dismissAnnouncement);
    }

    var wrapper = document.querySelector('.main-content-wrapper');
    if (wrapper) {
      wrapper.insertBefore(bar, wrapper.firstChild);
      return;
    }

    document.body.insertBefore(bar, document.body.firstChild);
  }

  function patchFooterLogoLink() {
    var footerLogoLink = document.querySelector('.footer-brand .logo-link');
    if (!footerLogoLink) {
      return;
    }
    footerLogoLink.setAttribute('href', 'https://datashelter.tech');
  }

  function cleanPath(value) {
    var source = String(value || '').trim().replace(/\\/g, '/');
    if (!source) {
      return '';
    }

    var absolute = source.charAt(0) === '/';
    var parts = source.split('/');
    var cleaned = [];
    for (var i = 0; i < parts.length; i += 1) {
      var part = parts[i];
      if (!part || part === '.') {
        continue;
      }
      if (part === '..') {
        if (cleaned.length && cleaned[cleaned.length - 1] !== '..') {
          cleaned.pop();
        } else if (!absolute) {
          cleaned.push(part);
        }
        continue;
      }
      cleaned.push(part);
    }

    var result = (absolute ? '/' : '') + cleaned.join('/');
    return result || (absolute ? '/' : '.');
  }

  function toBackupPath(value, backupRoot) {
    var path = String(value || '').trim();
    if (!path) {
      return '';
    }
    return cleanPath(path.charAt(0) === '/' ? path : cleanPath(backupRoot) + '/' + path);
  }

  function splitPatterns(value) {
    return String(value || '')
      .split(/[\n,]/)
      .map(function (pattern) { return pattern.trim(); })
      .filter(Boolean);
  }

  function hasGlobMeta(pattern) {
    return /[*?\[]/.test(pattern);
  }

  function escapeRegex(character) {
    return /[\\^$+.|()]/.test(character) ? '\\' + character : character;
  }

  function globToRegex(pattern) {
    var output = '^';
    for (var i = 0; i < pattern.length; i += 1) {
      var character = pattern.charAt(i);
      if (character === '*') {
        while (pattern.charAt(i + 1) === '*') {
          i += 1;
        }
        output += '.*';
      } else if (character === '?') {
        output += '.';
      } else if (character === '[') {
        var end = pattern.indexOf(']', i + 1);
        if (end === -1) {
          output += '\\[';
        } else {
          var characterClass = pattern.slice(i + 1, end);
          if (characterClass.charAt(0) === '!') {
            characterClass = '^' + characterClass.slice(1);
          }
          output += '[' + characterClass + ']';
          i = end;
        }
      } else if (character === '{') {
        var braceEnd = pattern.indexOf('}', i + 1);
        if (braceEnd === -1) {
          output += '\\{';
        } else {
          var alternatives = pattern.slice(i + 1, braceEnd).split(',').map(function (alternative) {
            return alternative.split('').map(escapeRegex).join('');
          });
          output += '(?:' + alternatives.join('|') + ')';
          i = braceEnd;
        }
      } else {
        output += escapeRegex(character);
      }
    }
    return new RegExp(output + '$');
  }

  function matchPattern(path, pattern) {
    var normalizedPattern = cleanPath(pattern);
    if (!normalizedPattern) {
      return false;
    }
    if (hasGlobMeta(normalizedPattern) || normalizedPattern.indexOf('{') !== -1) {
      try {
        return globToRegex(normalizedPattern).test(path);
      } catch (error) {
        return false;
      }
    }
    return path === normalizedPattern || path.indexOf(normalizedPattern + '/') === 0;
  }

  function matchingRule(path, patterns, backupRoot, checkParents) {
    var absolutePatterns = patterns.map(function (pattern) {
      return { original: pattern, absolute: toBackupPath(pattern, backupRoot) };
    });
    var candidates = [{ path: path, parent: false }];
    if (checkParents) {
      var parent = path;
      while (parent.indexOf('/') > 0 && parent !== cleanPath(backupRoot)) {
        parent = parent.slice(0, parent.lastIndexOf('/'));
        candidates.push({ path: parent, parent: true });
      }
    }

    for (var i = 0; i < candidates.length; i += 1) {
      for (var j = 0; j < absolutePatterns.length; j += 1) {
        if (matchPattern(candidates[i].path, absolutePatterns[j].absolute)) {
          return {
            pattern: absolutePatterns[j].original,
            matchedPath: candidates[i].path,
            parent: candidates[i].parent
          };
        }
      }
    }
    return null;
  }

  function shellQuote(value) {
    return "'" + String(value).replace(/'/g, "'\\\"'\\\"'") + "'";
  }

  function yamlList(values) {
    if (!values.length) {
      return '[]';
    }
    return values.map(function (value) {
      return '  - ' + JSON.stringify(value);
    }).join('\n');
  }

  function tokenizeCommand(command) {
    var tokens = [];
    var current = '';
    var quote = '';
    var escaped = false;
    String(command || '').split('').forEach(function (character) {
      if (escaped) {
        current += character;
        escaped = false;
      } else if (character === '\\') {
        escaped = true;
      } else if (quote) {
        if (character === quote) {
          quote = '';
        } else {
          current += character;
        }
      } else if (character === '"' || character === "'") {
        quote = character;
      } else if (/\s/.test(character)) {
        if (current) {
          tokens.push(current);
          current = '';
        }
      } else {
        current += character;
      }
    });
    if (current) {
      tokens.push(current);
    }
    return tokens;
  }

  function readCommandOption(tokens, names) {
    for (var i = 0; i < tokens.length; i += 1) {
      for (var j = 0; j < names.length; j += 1) {
        if (tokens[i] === names[j]) {
          return tokens[i + 1] || '';
        }
        if (tokens[i].indexOf(names[j] + '=') === 0) {
          return tokens[i].slice(names[j].length + 1);
        }
      }
    }
    return null;
  }

  function buildBackupCommand(backupRoot, includes, excludes) {
    var command = 'snaper backup files --path ' + shellQuote(backupRoot);
    if (includes.length) {
      command += ' --include ' + shellQuote(includes.join(','));
    }
    if (excludes.length) {
      command += ' --exclude ' + shellQuote(excludes.join(','));
    }
    return command;
  }

  function createFilterBuilder() {
    var builder = document.getElementById('snaper-filter-builder');
    if (!builder || builder.dataset.initialized === 'true') {
      return;
    }
    builder.dataset.initialized = 'true';
    builder.innerHTML =
      '<div class="snaper-filter-builder__intro">' +
      '<strong>Filter builder</strong><span>Edit the command, then check the sample paths.</span>' +
      '</div>' +
      '<div class="snaper-filter-builder__layout">' +
      '<div class="snaper-filter-builder__controls">' +
      '<label class="snaper-filter-builder__command-input">Command<textarea data-filter-command-input rows="2" spellcheck="false">snaper backup files --path /srv/app --exclude node_modules,public,*.log</textarea></label>' +
      '<label class="snaper-filter-builder__tree">Sample paths <small>one relative path per line</small><textarea data-filter-tree rows="5">src/main.go\nnode_modules/react/index.js\npublic/index.html\nlogs/app.log\nREADME.md</textarea></label>' +
      '<details class="snaper-filter-builder__advanced"><summary>Edit include and exclude lists separately</summary>' +
      '<div class="snaper-filter-builder__fields">' +
      '<label class="snaper-filter-builder__root">Backup root<input data-filter-root value="/srv/app" spellcheck="false"></label>' +
      '<label>Include <small>optional</small><input data-filter-include placeholder="src, docs" spellcheck="false"></label>' +
      '<label>Exclude <small>comma separated</small><input data-filter-exclude value="node_modules,public,*.log" spellcheck="false"></label>' +
      '</div>' +
      '</details>' +
      '<div class="snaper-filter-builder__actions"><button type="button" data-filter-reset>Reset</button></div>' +
      '<details class="snaper-filter-builder__yaml"><summary>Show configuration YAML</summary><pre><code data-filter-yaml></code></pre></details>' +
      '</div>' +
      '<div class="snaper-filter-builder__preview"><h4>Preview</h4><div class="snaper-filter-builder__legend"><span class="is-backed-up">Backed up</span><span class="is-excluded">Ignored</span><span class="is-not-selected">Not selected</span></div><div data-filter-results></div></div>' +
      '</div>';

    var rootInput = builder.querySelector('[data-filter-root]');
    var includeInput = builder.querySelector('[data-filter-include]');
    var excludeInput = builder.querySelector('[data-filter-exclude]');
    var treeInput = builder.querySelector('[data-filter-tree]');
    var commandInput = builder.querySelector('[data-filter-command-input]');
    var yamlOutput = builder.querySelector('[data-filter-yaml]');
    var results = builder.querySelector('[data-filter-results]');
    var defaults = {
      root: rootInput.value,
      include: includeInput.value,
      exclude: excludeInput.value,
      tree: treeInput.value
    };

    function render(updateCommand) {
      var backupRoot = cleanPath(rootInput.value);
      var includes = splitPatterns(includeInput.value);
      var excludes = splitPatterns(excludeInput.value);
      var paths = String(treeInput.value || '').split('\n').map(function (path) {
        return path.trim();
      }).filter(Boolean);
      if (updateCommand) {
        commandInput.value = buildBackupCommand(backupRoot, includes, excludes);
      }
      yamlOutput.textContent = 'included_paths:\n' + yamlList(includes) + '\nexcluded_paths:\n' + yamlList(excludes);

      var table = document.createElement('table');
      table.innerHTML = '<thead><tr><th>Sample path</th><th>Result</th><th>Why</th></tr></thead>';
      var body = document.createElement('tbody');
      paths.forEach(function (samplePath) {
        var absolutePath = toBackupPath(samplePath, backupRoot);
        var includeRule = includes.length ? matchingRule(absolutePath, includes, backupRoot, false) : null;
        var excludeRule = matchingRule(absolutePath, excludes, backupRoot, true);
        var state = 'backed up';
        var stateClass = 'is-backed-up';
        var reason = 'no include filter';
        if (includes.length) {
          if (includeRule) {
            reason = 'matches include rule ' + includeRule.pattern;
          } else {
            state = 'not selected';
            stateClass = 'is-not-selected';
            reason = 'does not match an include rule';
          }
        }
        if (excludeRule) {
          state = 'ignored';
          stateClass = 'is-excluded';
          reason = 'matches exclude rule ' + excludeRule.pattern;
          if (excludeRule.parent) {
            reason += ' on parent directory ' + excludeRule.matchedPath;
          }
        }

        var row = document.createElement('tr');
        var pathCell = document.createElement('td');
        var resultCell = document.createElement('td');
        var reasonCell = document.createElement('td');
        pathCell.textContent = samplePath;
        resultCell.textContent = state;
        resultCell.className = stateClass;
        reasonCell.textContent = reason;
        row.appendChild(pathCell);
        row.appendChild(resultCell);
        row.appendChild(reasonCell);
        body.appendChild(row);
      });
      table.appendChild(body);
      results.replaceChildren(table);
    }

    function syncFromCommand() {
      var tokens = tokenizeCommand(commandInput.value);
      var commandPath = readCommandOption(tokens, ['--path', '-p']);
      var commandInclude = readCommandOption(tokens, ['--include']);
      var commandExclude = readCommandOption(tokens, ['--exclude']);
      if (commandPath) {
        rootInput.value = commandPath;
      }
      includeInput.value = commandInclude || '';
      excludeInput.value = commandExclude || '';
      render(false);
    }

    [rootInput, includeInput, excludeInput].forEach(function (input) {
      input.addEventListener('input', function () { render(true); });
    });
    treeInput.addEventListener('input', function () { render(false); });
    commandInput.addEventListener('input', syncFromCommand);
    builder.querySelector('[data-filter-reset]').addEventListener('click', function () {
      rootInput.value = defaults.root;
      includeInput.value = defaults.include;
      excludeInput.value = defaults.exclude;
      treeInput.value = defaults.tree;
      commandInput.value = buildBackupCommand(defaults.root, splitPatterns(defaults.include), splitPatterns(defaults.exclude));
      render(false);
    });
    render(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      ensureAnnouncementBar();
      patchFooterLogoLink();
      createFilterBuilder();
    });
  } else {
    ensureAnnouncementBar();
    patchFooterLogoLink();
    createFilterBuilder();
  }

  document.addEventListener('docmd:page-mounted', function () {
    ensureAnnouncementBar();
    patchFooterLogoLink();
    createFilterBuilder();
  });

  // Crisp chat bubble
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = 'f96c76e6-e959-46b4-b085-8ccd1f73027d';
  (function () {
    var s = document.createElement('script');
    s.src = 'https://client.crisp.chat/l.js';
    s.async = 1;
    document.getElementsByTagName('head')[0].appendChild(s);
  })();
})();
