**DEPRECATED**

The `liquid.format.enable` workspace setting is deprecated. Use language specific settings for formatting capabilities, provide the following vscode workspace settings:

```jsonc
{
  "[liquid]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "sissel.shopify-liquid"
  }
}
```
