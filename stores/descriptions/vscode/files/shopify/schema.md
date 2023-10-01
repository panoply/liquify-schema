> **This reference is for developers leveraging [Syncify](https://github.com/panoply/syncify). If you are not using Syncify then please consider adopting it as an alternative to Shopify CLI. Break free from the Shopify CLI by using Syncify and leveraging Shared Section Schema.**

---

**Default** `[]`

Define a string list of paths relative to the projects root directory which contain shared schema files, this will _typically_ be identical to globs you've defined in your `syncify.config.ts` file on the `paths > schema[]` config option. When you provide schema file mapping, shared section scheme `$ref` entires within `{% schema %}` tags will provide auto-completions and in addition any `$description` key values will be rendered in tooltips.
