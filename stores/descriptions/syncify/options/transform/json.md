**JSON**

The `json` transform option controls how `.json` files should be processed. Templates, Config, Locales and Metafields paths typically where JSON files are used. Syncify supports JSON5 structures and options defined here will be used when Syncify is processing these such files types. In addition, Syncify will also apply handle any Assets that have `.json` (or `.schema` for shared schema) extension using these options.

> **NOTE**
>
> The settings provided here will be used to adhere and respect JSON beautification diffing and merging from remote sources. Align options with your formatting tastes or those which match your prettier rules.