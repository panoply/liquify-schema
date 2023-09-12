**Default** `shopify`

The `liquid.engine` option is used to determine the Liquid template variation you are working with. This extension supports the following Liquid variations:

- [Standard](https://shopify.github.io/liquid/)
- [Shopify](https://shopify.dev/docs/api/liquid)
- [11ty](https://www.11ty.dev/docs/languages/liquid/)
- [Jekyll](https://jekyllrb.com/docs/liquid/)

Features and capabilities differ depending on the engine you define. For example, if you are working with the **Shopify** Liquid variation the engine is set to `Standard` it will result in features like object and property completions not being available.

**Tip**

You can optionally infer the engine with your `.liquidrc` file.
