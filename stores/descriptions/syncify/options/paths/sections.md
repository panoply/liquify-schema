Paths to files to be published to the theme `sections` directory. These are either going to be `.liquid` or `.json` (section group) file types. You can provide sub-directory references here and Syncify will re-path values.

**Rename Example**

```js
{
  sections: {
   '[dir]-[name]': [
     'sections/foo/*', // sections in this directory will prefix foo-
     'sections/bar/*' // sections in this directory will prefix bar-
   ],
   '*': [
     './sections/**'  // all other sections will use source name
   ]
  }
}
```