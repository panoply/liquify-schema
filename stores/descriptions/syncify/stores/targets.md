The theme key properties are internal identifiers used as **target** references. The name **must** be written in lowercase format and cannot contain any whitespace characters. You will use the name you provide to perform operations via the CLI.

**Example**

Below we have passed 3 theme targets, `dev`, `stage` and `live`. Each theme value points to a specific theme that exists in the Shopify store `cool-jeans.myshopify.com`.

```jsonc
{
  "domain": "cool-jeans", // equivalent to cool-jeans.myshopify.com
  "themes": {
    "dev": 12345678910, // example of a theme target
    "stage": 1239846789, // example of a theme target
    "live": 1987654321, // example of a theme target
  }
}
```

**Usage**

Using the above example, if you wanted to start up **watch** mode and begin developing and syncing with the theme id provided to the `dev` value, we would run the following command:

```bash
$ syncify cool-jeans --theme dev --watch
```

What if you wanted to target not just the `dev` theme but also the `stage` theme in **watch** mode, then you can simply just pass the `stage` target name along side the `dev` argument, for example:

```bash
$ syncify cool-jeans --theme dev,stage --watch
```

Let's say you want perform full **build** and then an upload to the theme id using the `live` key, then you could simply pass:

```bash
$ syncify cool-jeans --theme live --build --upload
```