# @liquify/schema

This module contains [JSON Schema Stores](https://json-schema.org/) which are used by the [Liquify](https://liquify.dev) IDE extension. This package is available on the npm registry for modules consumed within the project.

**The [sections](#shopify-sections) schema store that was written for the Shopify Liquid variation is not MIT. Please ask permission before using, borrowing logic and/or adapting it into your projects. Unless you have consent, you cannot implement the structures.**

> **Note**&nbsp;
> This only applies to the section schema store - all other schemas are MIT.

### Why?

Liquify supports completions and validations for JSON files and embedded regions. Projects using the Liquify IDE tool require these stores to provide intellisense features.

# Usage

If you are using the Liquify extension ([vscode-liquid](https://github.com/panoply/vscode-liquid)) these stores will be provided automatically. In cases where you require reference to the stores explicitly, then you can implement them using the [unpkg](https://unpkg.com/) CDN.

When referencing a schema, it is assumed that your text editor supports JSON `$schema` properties.

```json
{
  "$schema": "https://unpkg.com/@liquify/schema/{store}"
}
```

> Replace the `{store}` portion with the appropriate Schema Store [below](#schema-stores).

### Internal Usage

Using the module within the workspace points `main` in the root package.json to the `/package` directory.

# MIT Stores

Below the available MIT schema stores provided in this module.

### [Liquidrc](https://unpkg.com/@liquify/schema/liquidrc.json)

- [`https://unpkg.com/@liquify/schema/liquidrc.json`](https://unpkg.com/@liquify/schema/liquidrc.json)

JSON Schema used for providing intellisense features in `.liquidrc`, `.liquidrc.json` files. The stores are also used in vscode workspace settings via the `liquid.*` property.

### [Æsthetic](https://unpkg.com/@liquify/schema/esthetic.json)

- [`https://unpkg.com/@liquify/schema/esthetic.json`](https://unpkg.com/@liquify/schema/esthetic.json)

JSON Schema used for providing intellisense features for `.esthetic`, `esthetic.config.json` `.Æ` or `Æ.json` files but also on the `format` property in the `.liquidrc` file. The stores are also used for on the package.json `esthetic` field and vscode workspace settings via the `liquid.format.*` property.

### [Æsthetic Package JSON](https://unpkg.com/@liquify/schema/esthetic/package-json.json)

- [`https://unpkg.com/@liquify/schema/esthetic/package-json.json`](https://unpkg.com/@liquify/schema/esthetic/package-json.json)

JSON Schema used for providing intellisense features in `package.json` files via the `esthetic` key property.

### [Syncify](https://unpkg.com/@liquify/schema/syncify.json)

- [`https://unpkg.com/@liquify/schema/syncify.json`](https://unpkg.com/@liquify/schema/syncify.json)
- [`https://unpkg.com/@syncify/schema/package.json`](https://unpkg.com/@syncify/schema/sections.json)

JSON Schema used for providing intellisense features in `syncify.config.json` files.

> This store is made available by default via the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension.

### [Syncify Package JSON](https://unpkg.com/@liquify/schema/package-json.json)

- [`https://unpkg.com/@liquify/schema/syncify/package-json.json`](https://unpkg.com/@liquify/schema/package-json.json)

JSON Schema used for providing intellisense features in `package.json` files via the `syncify` key property. This store is available within the [`@syncify/schema`](https://github.com/panoply/syncify/packages/schema) module.

> This store is made available by default via the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension.

### [Syncify ENV](https://unpkg.com/@liquify/schema/syncify/env.json)

- [`https://unpkg.com/@liquify/schema/syncify/env.json`](https://unpkg.com/@liquify/schema/syncify/env.json)
- [`https://unpkg.com/@syncify/schema/env.json`](https://unpkg.com/@syncify/schema/env.json)

JSON Schema used for providing intellisense features in `.env.syncify` and `.env.syncify.json` files. This store is available within the [`@syncify/schema`](https://github.com/panoply/syncify/packages/schema) module.

> This store is made available by default via the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension.

### [Syncify Shared Schema](https://unpkg.com/@liquify/schema/syncify/shared-schema.json)

- [`https://unpkg.com/@liquify/schema/syncify/shared-schema.json`](https://unpkg.com/@liquify/schema/syncify/shared-schema.json)
- [`https://unpkg.com/@syncify/schema/sections.json`](https://unpkg.com/@syncify/schema/sections.json)

JSON Schema used for providing intellisense features in [Syncify](https://github.com/panoply/syncify) Shared Section files. This store is available within the [`@syncify/schema`](https://github.com/panoply/syncify/packages/schema) module.

> This store is made available by default via the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension.

### [VSCode Liquid Configuration](https://unpkg.com/@liquify/schema/vscode/configuration.json)

- [`https://unpkg.com/@liquify/schema/vscode/configuration.json`](https://unpkg.com/@liquify/schema/vscode/configuration.json)

JSON Schema used for providing intellisense features within vscode workspace and user settings. The stores are injected into the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension `configuration` field of the containing package.json file.

### [Theme Liquid Docs](https://github.com/Shopify/theme-liquid-docs)

- [`https://unpkg.com/@liquify/theme-docs/objects.json`](https://unpkg.com/@liquify/theme-docs/objects.json)
- [`https://unpkg.com/@liquify/theme-docs/filters.json`](https://unpkg.com/@liquify/theme-docs/filters.json)

JSON Schema used for the data references available in the [theme-liquid-docs](https://github.com/Shopify/theme-liquid-docs) repository, seeing as the company with 2000+ developers failed to provide them.

**TODO**

- Tags

# Licensed Stores

Below is the list od license imposed schema stores available in this module. Licensed schemas are MIT usage for individuals and developers but Shopify employees do not have permission to leverage, use, borrow or even view those schemas. You are not paid to copy or redistribute work that you did not create for you financial benefit or for you to score points at your job. Either write your own or contact me for usage.

### [Shopify Templates](https://unpkg.com/@liquify/schema/shopify/templates.json)

- [`https://unpkg.com/@liquify/schema/shopify/settings_schema.json`](https://unpkg.com/@liquify/schema/shopify/templates.json)

JSON Schema used for providing intellisense features for Shopify OS 2.0 template files. The stores are for Shopify theme environments.

> This store is made available by default via the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension.

### [Shopify Sections](https://unpkg.com/@liquify/schema/shopify/sections.json)

- [`https://unpkg.com/@liquify/schema/shopify/sections.json`](https://unpkg.com/@liquify/schema/shopify/sections.json)

JSON Schema used for providing intellisense features within the Liquify [Liquid Language Server](#) package. The stores are passed to `{% schema %}` embedded regions of the Shopify Liquid variation.

> This store is made available by default via the [vscode-liquid](https://github.com/panoply/vscode-liquid) extension.

### [Shopify Section Groups](https://unpkg.com/@liquify/schema/shopify/section-groups.json)

- [`https://unpkg.com/@liquify/schema/shopify/section-groups.json`](https://unpkg.com/@liquify/schema/shopify/section-groups.json)

JSON Schema used for providing intellisense features for Shopify Section Groups. The stores are for Shopify theme environments.

### [Shopify Settings Schema](https://unpkg.com/@liquify/schema/shopify/settings_schema.json)

- [`https://unpkg.com/@liquify/schema/shopify/settings_schema.json`](https://unpkg.com/@liquify/schema/shopify/settings_schema.json)

JSON Schema used for providing intellisense features within `settings_schema.json` files. The stores are for Shopify theme environments.

### [Shopify Settings Data](https://unpkg.com/@liquify/schema/shopify/settings_data.json)

- [`https://unpkg.com/@liquify/schema/shopify/settings_data.json`](https://unpkg.com/@liquify/schema/shopify/settings_data.json)

JSON Schema used for providing intellisense features within `settings_data.json` files. The stores are for Shopify theme environments.

# Contributing

The stores are written using [Draft 7](http://json-schema.org/draft-07/schema) of the JSON Schema specification. The `markdownDescription` field links to Markdown files contained in the [stores/descriptions](https://github.com/panoply/liquify-schema/tree/master/stores/descriptions) directory. Descriptions and generated and injected when running `pnpm build` and are rendered in hover and completion descriptions.

### Publishing

The distributed package is published to the NPM Registry in an isolated manner. See the package.json scripts runners for `prepublishOnly` and `prepublish` for a contextual understanding of this.

### Testing

The [test](https://github.com/panoply/liquify-schema/tree/master/test) directory links to **generated** stores in the `package` directory. The containing [test/live](https://github.com/panoply/liquify-schema/tree/master/test/live) directory is where stores are tested against CDN linked variations.

## Author

🥛 [Νίκος Σαβίδης](mailto:n.savvidis@gmx.com) <img align="right" src="https://img.shields.io/badge/-@niksavvidis-1DA1F2?logo=twitter&logoColor=fff" />
