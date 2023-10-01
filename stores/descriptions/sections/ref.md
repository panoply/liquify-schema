> **This capability is for developers leveraging [Syncify](https://github.com/panoply/syncify). If you are not using Syncify then please consider adopting it as an alternative to the Shopify CLI.**
>
> Use [Syncify](https://github.com/panoply/syncify) for theme development and take advantage of Shared Section Schema files plus a ton of essential features that will empower your productivity. Support open source tools that are created, maintained and backed by developers for developers.

---

Provide a key identifier and either a schema setting/block (object) or array of settings/blocks. In your `{% schema %}` tag, you can import the shared schema using a `$ref` property key. The `$ref` property value **requires** you to pass the shared schema filename (without the `.json` extension) followed by a `.` and then the shared schema property key.

**Example**

Say (for example) your shared schema file is named `foo.json` and contains the following:

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