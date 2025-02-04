Paths to files to be published to the theme `snippets` directory. These are Liquid template files.

**Rename Example**

```js
{
  snippets: {
   '[dir]-[name]': [
     'snippets/foo/*', // snippets in this directory will prefix foo-
     'snippets/bar/*' // snippets in this directory will prefix bar-
   ],
   '*': [
     './snippets/**'  // all other snippets will use source name
   ]
  }
}
```