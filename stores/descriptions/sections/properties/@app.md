App block wrapperAnchor link to section titled **"App block wrapper"**. Merchants can add app blocks to a page in the following ways:

- As a block within the confines of the section that's rendering the block
- In a similar manner to sections, giving them the full width of the page to render content

As app blocks aren't sections themselves, Shopify wraps these full-width app blocks in a platform-generated section by default. However, you can override this default section by creating your own section called apps.liquid.

The `apps.liquid` section schema needs to include a block of type `@app`, as well as a `preset`. If either of these is missing, then an `Apps not supported` or `Apps section is invalid` error is returned in the theme editor and merchants aren't able to use the section.

> **CAUTION**
>
> The `apps.liquid` section schema can't contain the `templates` schema attribute. This also includes the `templates` attribute within the `enabled_on/disabled_on` schema attributes. It's expected that the `apps.liquid` section is available on all templates.

**Example**

```liquid

{% for block in section.blocks %}
  {% render block %}
{% endfor %}

{% schema %}
  {
    "name": "App wrapper",
    "settings": [],
    "blocks": [
      {
        "type": "@app"
      }
    ],
    "presets": [
      {
        "name": "App wrapper"
      }
    ]
  }
{% endschema %}


```

#

---

[Shopify Documentation](https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks#app-block-wrapper)
