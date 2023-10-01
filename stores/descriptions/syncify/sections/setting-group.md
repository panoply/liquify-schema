A setting group is identical to a setting spread, but the difference is the settings array list is provided on a `settings[]` key. Developers may prefer this structure when using the VSCode Liquid extension as you can pass in a `$description` that will describe the setting group.

**Input Example**

```jsonc
// filename: sample.json
{
  "foo": {
    "$description": [
      "You can also pass an array of string values or string. Use the VSCode Liquid",
      "extension to render the description in hovers. Markdown is supported",
      "**bold**, _italic_ etc etc."
    ],
    "settings": [
      {
        "type": "text",
        "id": "some_id",
        "label": "Foo Title",
        "default": "Lorem ipsum dolor sit amet"
      },
      {
        "type": "text",
        "id": "xxx",
        "label": "Your Name",
      }
    ]
  }
}
```

**Referencing**

```liquid
{% schema %}
{
  "name": "test",
  "settings": [
    {
      "ref": "sample.foo"
    }
  ]
}
{% endschema %}
```

**Output**

```liquid
{% schema %}
{
  "name": "test",
  "settings": [
    {
      "type": "text",
      "id": "some_id",
      "label": "Foo Title",
      "default": "Lorem ipsum dolor sit amet"
    },
    {
      "type": "text",
      "id": "xxx",
      "label": "Your Name",
    }
  ]
}
{% endschema %}
``
