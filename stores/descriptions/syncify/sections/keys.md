Internal descriptions for each exposed option available in this shared schema. Pass in the setting key and either a string or array of strings. Each description will be made available in intelliSense completions and hovers for developers using the [VSCode Liquid](https://github.com/panoply/vscode-liquid) extension.

**Example**

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