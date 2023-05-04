A section group is a JSON data file that stores a list of [sections](https://shopify.dev/docs/themes/architecture/sections) and [app blocks](https://shopify.dev/docs/themes/architecture/sections/app-blocks) to be rendered, and their associated settings. Merchants can add sections to the section group, as well as remove and reorder them, in the theme editor.

You can [add a reference to a section group](https://shopify.dev/docs/themes/architecture/section-groups#include-a-section-group-in-a-layout-file) in a [layout](https://shopify.dev/docs/themes/architecture/layouts) file to add support for sections in areas that are controlled by the layout, such as the header or footer.

The sections and app blocks referenced in a section group are rendered in the order specified by the `order` attribute, with no markup between the sections. Section groups can render up to 25 sections, and each section can have up to 50 blocks.

The sections and app blocks referenced in section groups are the same sections and app blocks referenced in templates, and should follow the same [guidelines](https://shopify.dev/docs/themes/best-practices/templates-sections-blocks).

You can use section groups in place of [static sections](https://shopify.dev/docs/themes/architecture/sections#statically-render-a-section) in layouts. [Learn how to migrate from static sections to section groups](https://shopify.dev/docs/themes/architecture/section-groups/migrate).

> **TIP**
>
> In most themes, you should use section groups for only the header and footer. If you create additional section groups for other areas of the theme, such as a navigation sidebar, then name the section group to reflect its intended purpose.