---
description: "Build and preview Snaper file-backup include and exclude filters before running a backup."
---

# File-filter builder

Edit a backup command and paste a small sample of your directory tree. The builder shows which paths will be backed up, ignored by an exclusion, or left out by an inclusion rule.

The preview runs only in your browser. It does not read files from your server and it does not run the command.

<div id="snaper-filter-builder" class="snaper-filter-builder" aria-label="Snaper include and exclude filter builder"></div>

## How to use it

1. Edit the command at the top. The builder reads the path, include, and exclude options from it.
2. Enter representative paths from the directory you plan to back up.
3. Check the preview. It explains the matching rule for each sample path.
4. Copy the command when the preview is what you expect.

Use the collapsed advanced section when you prefer editing the include and exclude lists separately. It updates the command automatically and can also show the corresponding configuration values.

For the complete matching rules and more examples, see [backup files](/cli/usage/backup).
