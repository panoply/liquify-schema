A block singleton represents a single schema block setting and uses an object type structure. Block singletons can only be passed to schema block settings.

**Input Example**

```jsonc
// filename: sample.json
{
  "foo": {
    "name": "something",
    "type": "example",
    "settings": [
      {
        "type": "text",
        "id": "some_id",
        "label": "Foo Title",
        "default": "Lorem ipsum dolor sit amet"
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
  "blocks": [
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
  "blocks": [
    {
      "name": "something",
      "type": "example",
      "settings": [
        {
          "type": "text",
          "id": "some_id",
          "label": "Foo Title",
          "default": "Lorem ipsum dolor sit amet"
        }
      ]
    }
  ]
}
{% endschema %}
``
