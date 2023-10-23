Style inputs can be defined a few different ways depending on your preference, using the rename pattern requires you to provide either `assets/` or `snippets/` as a starting entry point.


**Rename with single input**

```jsonc
// OPTION 1 - Rename with single input
{
  "style": {
   "assets/stylesheet.min.css": "path/to/source/file.css", // write to assets dir
   "snippets/css-file.liquid": "path/to/source/foo.css"    // write as snippet
  }
}
```

**Rename with multiple inputs**

```jsonc
// OPTION 2 - Rename with multiple inputs
{
  "style": {
   "assets/[file].min.[ext]": [
     "path/to/source/file-1.css", // outputs assets/file-1.min.css
     "path/to/source/file-2.css", // outputs assets/file-2.min.css
   ]
  }
}
```

**Rename with overrides**

```jsonc
// OPTION 3 - Rename with overrides
{
  "style": {
   "assets/filename.min.css": {
      "input": "path/to/source/file.scss",
      "sass": true
    }
  }
}
```

