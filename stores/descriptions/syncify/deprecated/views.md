DEPRECATED

The "views" option is deprecated. You now define rename paths and sub-directory prefixing on the "paths" options. Both the "snippets" and "sections" paths options accept rename object structures.

✓ THIS IS CORRECT

{
  "paths": {
    "sections": {
      "[dir]-[name]": ["*"]
    },
    "snippets": {
      "[name].[dir]": ["*"]
    }
  }
}

𐄂 THIS IS INCORRECT

{
  "views": {}
}