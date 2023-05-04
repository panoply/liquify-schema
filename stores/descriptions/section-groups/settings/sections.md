An object that uses section IDs as keys, and section data as values. You can leave this attribute empty. The sections attribute of section groups holds the data for the sections to be rendered by the section group. These can be either theme sections or app sections. You can't share section data across section groups, so each section must have an ID that's unique within the section group.

Section groups can render up to 25 sections, and each section can have up to 50 blocks.

> **Duplicate IDs within the template aren't allowed.**

The [format of the section data](https://shopify.dev/docs/themes/architecture/section-groups#section-data) is the same as the section data in [settings_data.json](https://shopify.dev/docs/themes/architecture/config/settings-data-json). JSON templates can render up to 25 sections, and each section can have up to 50 blocks.

#

---

[Shopify Documentation](https://shopify.dev/docs/themes/architecture/section-groups#schema)
