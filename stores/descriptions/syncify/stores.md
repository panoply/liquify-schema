The theme key properties are internal identifiers used as **target** references. The name **must** be written in lowercase format and cannot contain any whitespace characters. You will use the name you provide to perform operations via the CLI.

**Example**

Below we have passed 3 theme targets, `dev`, `stage` and `live`. Each theme value points to a specific theme that exists in the Shopify store `cool-jeans.myshopify.com`.

```jsonc
{
  // equivalent to cool-jeans.myshopify.com
  "cool-jeans": {
    "dev": 12345678910, // example of a theme target
    "stage": 1239846789, // example of a theme target
    "live": 1987654321, // example of a theme target
  }
}
```

**Usage**

Using the above example, if you wanted to start up **watch** mode and begin developing and syncing with the theme id provided to the `dev` value, we would run the following command:

```bash
$ sy watch -T cool-jeans:dev
```

What if you wanted to target not just the `dev` theme but also the `stage` theme in **watch** mode, then you can simply just pass the `stage` target name along side the `dev` argument, for example:

```bash
$ sy watch -T cool-jeans:dev,stage
```