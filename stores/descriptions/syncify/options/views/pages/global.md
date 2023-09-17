If suffixDir is `true` you can provide a list of page sub-directories or relative files that should pass through without applying the directory name as a template_suffix on the page.

**Cannot contain glob (`*`) stars**

```js

// ✓ This is correct
{ "global": ['some-dir/filename.md' ] }

// ✗ This is incorrect
{ "global": ['some-dir/*.md' ] }

```