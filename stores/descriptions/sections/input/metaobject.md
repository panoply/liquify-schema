A `metaobject` setting allows merchants to select metaobject entries of a designated type through a picker interface. A metaobject setting value can be either of the following formats:

- A [metaobject object](https://shopify.dev/docs/api/liquid/objects/metaobject)
- `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

This setting supports both standard and custom metaobject definitions:

**Standard metaobject definitions**

These are readily available in the theme editor and do not need to be pre-enabled on a shop. An example of a standard metaobject is the `product_review` metaobject. [Learn more](https://shopify.dev/docs/apps/build/custom-data/metaobjects/list-of-standard-definitions) about current standard metaobject definitions.

Standard metaobject example:

```json
{
  "type": "metaobject",
  "id": "my_material_setting",
  "label": "Material",
  "metaobject_type": "shopify--material"
}
```

**Custom metaobject definitions**

These are designed for custom themes and require the metaobject definition to already exist. Note that custom metaobject definitions are not allowed in themes listed on the Theme Store. An example of a custom metaobject would be an `author` metaobject.

Custom metaobject example:

```json
{
  "type": "metaobject",
  "id": "my_artist",
  "label": "Artist",
  "metaobject_type": "artist"
}
```

> Additionally, apps can utilize metaobject settings with their own app-owned metaobject definitions and entries.


**Limitations**

- Only a single `metaobject_type` is supported at a time, as defined in the setting's schema.
- In order for themes to meet [publishing guidelines](https://shopify.dev/docs/storefronts/themes/store/requirements#13-settings) for the Shopify Theme Store, only standard definitions can be used. Custom or app owned definitions cannot be used.
- When referencing a custom or **app created** `metaobject_type`, the definition must exist on the shop and be available to the storefront. If either condition isn't met, the setting will show an error in the theme editor.

#

---

[Shopify Documentation](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#metaobject)
