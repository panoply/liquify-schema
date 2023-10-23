svg inputs can be defined a few different ways depending on your preference, using the rename pattern requires you to provide either `assets/` or `snippets/` as a starting entry point.


**Rename with single input**

```jsonc
// OPTION 1 - Rename with single input
{
  "svg": {
   "assets/foo-file.svg": "path/to/source/icons/file.svg",  // write to assets dir
   "snippets/icon.[file]": "path/to/source/icons/*.svg"    // write as snippet
  }
}
```

**Rename with multiple inputs**

```jsonc
// OPTION 2 - Rename with multiple inputs
{
  "svg": {
   "snippets/icon.[file]": [
     "path/to/source/file-1.svg", // outputs snippets/icon.file-1.liquid
     "path/to/source/file-2.svg", // outputs snippets/icon.file-2.liquid
   ]
  }
}
```

**Rename with overrides**

```jsonc
// OPTION 3 - Rename with overrides
{
  "svg": {
   "snippet/icons": {
      "input": "path/to/source/icons/*.svg",
      "format": "sprite"
    }
  }
}
```

