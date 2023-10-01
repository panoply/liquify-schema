A setting singleton is a single reusable section schema setting. Setting singletons are object types and support overrides when `$ref` referencing.

**Input Example**

```jsonc
// filename: sample.json
{
  "foo": {
    "type": "text",
    "id": "some_id",
    "label": "Foo Title",
    "default": "Lorem ipsum dolor sit amet"
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
    }
  ]
}
{% endschema %}
``
