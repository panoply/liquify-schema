An internal markdown supported description which described this shared schema file. If you are using the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension, this description will be provided in completions to help remind you of the available settings the shared schema provides.

**Example**

```json

{
  "$schema": "https://unpkg.com/@syncify/schema/sections.json",
  "some_setting": {
    "$description": [
      "You can also pass an array of string values or string. Use the VSCode Liquid",
      "extension to render the description in hovers. Markdown is supported",
      "**bold**, _italic_ etc etc"
    ]
  }
}

```