[PostCSS](https://postcss.org/) Override

CSS File transforms will use the options provided to `processor.postcss` but you can optionally override those defaults on a per-transform basis. Any configuration options defined here will be merged with the options defined in `processor.postcss`.

You can also skip pre-processing with postcss by passing a _boolean_ `false`, which will inform Syncify to not pass output to PostCSS. By default, Syncify will pass all compiled SASS and files with `.css` extensions to PostCSS.
