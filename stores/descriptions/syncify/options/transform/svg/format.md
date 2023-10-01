The SVG export format. Syncify can produce 2 different SVG formats:

You can omit this option when you have only 1 pre-processor installed or if you are applying a per-transfrom configuration override as it will default to the format which the inferred pre-processor produces. If you are using both the supported processors ([SVGO](https://github.com/svg/svgo) & [SVG Sprite](https://github.com/svg-sprite)) then you will need to inform Syncify on which format it should produce.


- When no SVG pre-processor is installed: undefined
- When both SVGO and SVG Sprite are installed (required): null
- When SVGO is the only processor installed: 'file'
- When SVG Sprite is the only processor installed: 'sprite'

**File Format**

SVG transforms using a `file` format require SVGO to be installed. File formats will produce individual `.svg` files that can be output as an `asset` or inlined into a `snippet`.

**Sprite Format**

SVG transforms using a `sprite` format require SVG Sprite to be installed. Sprite formats will produce an SVG Sprite that can be output as an `asset` or inlined into a `snippet`.
