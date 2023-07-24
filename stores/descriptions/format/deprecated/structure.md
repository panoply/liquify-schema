DEPRECATED STRUCTURE

As of version 4.0.0 beautification rules within .liquidrc or .liquidrc.json files need to be placed within a "format" object (see below example). You can generate a new a liquidrc file via the vscode command palette (cmd + shift + p) and choosing "Liquid: Generate .liquidrc (recommended)". This will produce a new file with pre-defined formatting rules. Alternatively, you can manually align existing configuration.

NEW SETTINGS AS OF v4^

{
  "format": {
    "ignore": [],
    "wrap": 0,
    "liquid": {},
    "markup: {},
    "json": {},
    "style": {},
    "script": {}
  }
}
