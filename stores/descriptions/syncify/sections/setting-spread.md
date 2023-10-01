A setting spread consists of an array list of schema settings. Setting spreads will concatenate when referencing within section schema. You can pass spreads to settings or within blocks.

**Input Example**

```jsonc
// filename: sample.json
{
  "foo": [
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
