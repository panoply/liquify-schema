JSON templates allow you to control the look and feel of different pages of the online store using [sections](https://shopify.dev/docs/themes/architecture/sections).

JSON templates are data files that store a list of sections to be rendered, and their associated settings. Merchants can add, remove, and reorder these sections using the theme editor.

When a page is rendered with a JSON template, the sections are rendered in the order specified by the [order attribute](https://shopify.dev/docs/themes/architecture/templates/json-templates#schema), with no markup between the sections. JSON templates can render up to 25 sections, and each section can have up to 50 blocks.

Although JSON templates differ from Liquid templates in their contents, they are still template files that support the following Shopify theme features:

- All template types, except for [gift_card](https://shopify.dev/docs/themes/architecture/templates/gift-card-liquid) and [robots.txt](https://shopify.dev/docs/themes/architecture/templates/robots-txt-liquid).
- [Alternate templates](https://shopify.dev/docs/themes/architecture/templates#alternate-templates).

When you build a JSON template, you should also build a section that contains the core functionality for the template. For example, when you're building a [list-collections](https://shopify.dev/docs/themes/architecture/templates/list-collections) JSON template, it should reference a section that uses the [collections object](https://shopify.dev/docs/api/liquid/objects/collections).

A theme can contain up to 1,000 JSON templates. After the limit is reached, you can't create new JSON templates.

#

---

[Shopify Documentation](https://shopify.dev/docs/themes/architecture/templates/json-templates)