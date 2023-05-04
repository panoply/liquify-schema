An array of section IDs, listed in the order that they should be rendered. The IDs must exist in the `sections` object. You can leave this attribute empty. Duplicate IDs aren't allowed.

```json

{
  "type": "header",
  "name": "Header Group",
  "sections": {
    "header": {
      "type": "header",
      "settings": {}
    }
  },
  "order": [
    "header"
  ]
}

```

#

---

[Shopify Documentation](https://shopify.dev/docs/themes/architecture/section-groups#schema)
