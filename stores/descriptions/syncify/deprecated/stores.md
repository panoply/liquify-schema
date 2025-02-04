This store and theme configuration structure is deprecated and you should instead align with the new structure and naming convention. The old structure was far too verbose. The "stores" key has been renamed to "targets" and the you now define stores and themes in an object structure.

You can also (optionally) define store and theme references in a "theme.toml" or "theme.yaml" file.

✓ NEW STRUCTURE - DO THIS

{
  "syncify": {
    "targets": {
      "store-1": {
        "foo": 123456789,
        "bar": 987654321
      },
      "store-2": {
        "baz": 112233445
      }
    }
  }
}

𐄂 OLD STRUCTURE - DO NOT DO THIS

{
  "syncify": {
    "stores": [
      {
        "domain": "store-1",
        "themes": {
          "foo": 123456789,
          "bar": 987654321
        }
      },
      {
        "domain": "store-2",
        "themes": {
          "baz": 112233445
        }
      }
    ]
  }
}