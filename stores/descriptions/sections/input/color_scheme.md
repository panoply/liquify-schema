A setting of type `color_scheme` outputs a picker with all of the available theme color schemes, and a preview of the selected color scheme. Theme color schemes in the picker are defined using the [color_scheme_group](https://shopify.dev/docs/themes/architecture/settings/input-settings#color_scheme_group) setting. You can apply a color scheme to sections, blocks and general theme settings. Color scheme settings aren't supported in app blocks.

For example, the following setting generates the following output:

```json
{
  "type": "color_scheme",
  "id": "color_scheme",
  "default": "scheme_1",
  "label": "Color Scheme"
}
```

When accessing the value of a `color_scheme` type setting, Shopify returns the selected `color_scheme` object from `color_scheme_group`.

If no value was entered, or the value was invalid, then the default value from `color_scheme` is returned. If the default value is also invalid, then the first `color_scheme` from `color_scheme_group` is returned.

If the theme doesn't have `color_scheme_group` data in `settings_data.json`, then [nil](https://shopify.dev/docs/api/liquid/basics/types#nil) is returned.


#

---

[Shopify Documentation](https://shopify.dev/docs/themes/architecture/settings/input-settings#color_scheme)
