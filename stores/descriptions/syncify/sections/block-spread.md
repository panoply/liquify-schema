A block spread is an array list of reusable schema block settings. Block spreads can only be passed to schema blocks and when referencing will apply concatenation.

**Input Example**

```jsonc
// filename: sample.json
{
  "foo": [
    {
      "name": "one",
      "type": "one_example",
      "settings": [
        {
          "type": "text",
          "id": "some_id",
          "label": "Foo Title",
          "default": "Lorem ipsum dolor sit amet"
        }
      ]
    },
    {
      "name": "two",
      "type": "two_example",
      "settings": [
        {
          "type": "text",
          "id": "xxx",
          "label": "Your Name",
        },
        {
          "type": "text",
          "id": "bar_id",
          "label": "Bar Title",
          "default": "Lorem ipsum dolor sit amet"
        }
      ]
    }
  ]
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
      "name": "one",
      "type": "one_example",
      "settings": [
        {
          "type": "text",
          "id": "some_id",
          "label": "Foo Title",
          "default": "Lorem ipsum dolor sit amet"
        }
      ]
    },
    {
      "name": "two",
      "type": "two_example",
      "settings": [
        {
          "type": "text",
          "id": "xxx",
          "label": "Your Name",
        },
        {
          "type": "text",
          "id": "bar_id",
          "label": "Bar Title",
          "default": "Lorem ipsum dolor sit amet"
        }
      ]
    }
  ]
}
{% endschema %}
``
