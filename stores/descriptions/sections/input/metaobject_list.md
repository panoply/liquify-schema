A `metaobject_list` setting allows merchants to select multiple metaobject entries of a designated type through a picker interface. A metaobject_list setting value can be either of the following formats:

- An array of [metaobject objects](https://shopify.dev/docs/api/liquid/objects/metaobject). The array supports pagination using the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate#paginate-paginating-setting-arrays) tag. You can also append `.count` to the [setting key](https://shopify.dev/docs/storefronts/themes/architecture/settings#access-settings) to return the number of metaobject entries in the array.
- `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

This setting supports both standard and custom metaobject definitions:

**Standard metaobject definitions**

These are readily available in the theme editor and do not need to be pre-enabled on a shop. An example of a standard metaobject is the `product_review` metaobject. [Learn more](https://shopify.dev/docs/apps/build/custom-data/metaobjects/list-of-standard-definitions) about current standard metaobject definitions.

Standard metaobject list example:

```json
{
  "type": "metaobject_list",
  "id": "my_material_list_setting",
  "label": "Materials",
  "metaobject_type": "shopify--material",
  "limit": 12
}
```

**Custom metaobject definitions**

These are designed for custom themes and require the metaobject definition to already exist. Note that custom metaobject definitions are not allowed in themes listed on the Theme Store. An example of a custom metaobject would be an `author` metaobject.

Custom metaobject list example:

```json
{
  "type": "metaobject_list",
  "id": "my_artist_list",
  "label": "Artists",
  "metaobject_type": "artist",
  "limit": 12
}
```

> Additionally, apps can utilize `metaobject_list` settings with their own app-owned metaobject definitions and entries.


**Limitations**

- Only a single `metaobject_type` is supported at a time, as defined in the setting's schema.
- In order for themes to meet [publishing guidelines](https://shopify.dev/docs/storefronts/themes/store/requirements#13-settings) for the Shopify Theme Store, only standard definitions can be used. Custom or app owned definitions cannot be used.
- When referencing a custom or **app created** `metaobject_type`, the definition must exist on the shop and be available to the storefront. If either condition isn't met, the setting will show an error in the theme editor.
