[SASS Dart](https://sass-lang.com/documentation/js-api/) Override

SASS File transforms will use the options provided to `processor.sass` but you can optionally override those defaults on a per-transform basis. Any configuration options defined here will be merged with the options defined in `processor.sass`.

You can also skip SASS transforms by passing a _boolean_ `false`, which will inform Syncify to not pass output to SASS, which is the default if SASS is not installed.

By default, Syncify will forward all input files using `.scss` or `.sass` or extension to SASS Dart. If you have PostCSS installed then Syncify will automatically pass SASS files to PostCSS in the post-process.

