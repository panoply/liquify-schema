Script inputs can be defined a few different ways depending on your preference, using the rename pattern requires you to provide either `assets/` or `snippets/` as a starting entry point.


**Rename with single input**

```jsonc
// OPTION 1 - Rename with single input
{
  "script": {
   "assets/filename.min.js": "path/to/source/file.ts", // write to assets dir
   "snippets/js-file.liquid": "path/to/source/foo.ts"  // write as snippet
  }
}
```

**Rename with multiple inputs**

```jsonc
// OPTION 2 - Rename with multiple inputs
{
  "script": {
   "assets/[file].min.[ext]": [
     "path/to/source/file-1.ts", // outputs assets/file-1.min.js
     "path/to/source/file-2.ts", // outputs assets/file-2.min.js
   ]
  }
}
```

**Rename with overrides**

```jsonc
// OPTION 3 - Rename with overrides
{
  "script": {
   "assets/filename.min.js": {
      "input": "path/to/source/file.ts",
      "splitting": true,
      "treeShaking": false
    }
  }
}
```

