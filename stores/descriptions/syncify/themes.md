Provide an object `key` > `value` list of theme maps. The `key` properties represent a theme target name, the "target" name is an internal identifier you will use when executing operations on the CLI. The `value` is the theme `id` which you can obtain in your Shopify admin or alternatively via the CLI by running `syncify themes` command.

**Example**

```jsonc
{
  // equivalent to my-store.myshopify.com
  "my-store": {
    "dev": 12345678910, // example of a theme target
  }
}
````