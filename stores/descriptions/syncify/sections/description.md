An internal markdown supported description which described this shared schema file. If you are using the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension, this description will be provided in completions to help remind you of the available settings the shared schema provides.

**Basic Example**

```json

{
  "$schema": "https://unpkg.com/@syncify/schema/sections.json",
  "$description": [
      "You can also pass an array of string values or string. Use the VSCode Liquid",
      "extension to render the description in hovers. Markdown is supported",
      "**bold**, _italic_ etc etc"
   ]
}

```

**Advanced Example**

You may wish to provide an internal description for each exposed option available in the shared schema. The `$description` key also accepts an object with properties matching references, for example:

```json

{
   "$schema": "https://unpkg.com/@syncify/schema/sections.json",
   "$description": {
      "foo": [
         "This is an internal description for the \"foo\" setting and will",
         "be shown in completions and hovers when using the VSCode Liquid extension"
      ],
      "bar": [
         "This is an internal description for the \"bar\" setting and will",
         "be shown in completions and hovers when using the VSCode Liquid extension"
      ]
   },
   "foo": [],
   "bar": []
}

```