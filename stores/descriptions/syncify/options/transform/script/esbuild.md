[ESBuild Override](https://esbuild.github.io/)

ESBuild file transforms will use the options provided to `processor.esbuild`, but you can optionally override those defaults on a per-transform basis. Any configuration options defined here will be merged with the options defined in `processor.esbuild`.

You can also skip pre-processing with ESBuild by passing a _boolean_ `false`, which will inform Syncify to process scripts with ESBuild.


