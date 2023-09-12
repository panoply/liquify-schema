Provide a key identifier and either a schema setting (object) or array of settings. In your `{% schema %}` tag, you can inject the shared schema using the `$ref` property. The `$ref` property value **requires** you to pass the shared schema filename (without the `.json` extension) followed by a `.` and then the schema id.

> **TIP**
>
> Syncify shared section schema intelliSense is supported by the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension. If you are using the Shopify extension, consider uninstalling that and choosing VSCode Liquid.

---

**Example**

Say (for example)  you shared schema file is named `foo.json` and contains the following:

```json
{
  "hero_image": {
    "type": "image_picker",
    "id": "hero",
    "label": "Some Hero"
  },
  "hero_caption": {
    "type": "text",
    "id": "caption",
    "label": "Caption",
    "default": "Some Caption"
  }
}
```

You can inject the `hero_image` and `hero_caption` schema into any section, and also overwrite the `id`, `label` etc. In the below example, we inject the `hero_image` and apply an overwrite to the `hero_caption`.

```liquid
{% schema %}
{
  "name": "tester",
  "class": "example",
  "tag": "section",
  "settings": [
    {
      "ref": "foo.hero_image"
    },
    {
      "ref": "foo.hero_caption",
      "label": "New Caption",
      "default": "xxx"
    }
  ]
}
{% endschema %}
```