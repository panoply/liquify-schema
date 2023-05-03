Whether or not to format regions of code that are identified to be JavaScript. Tags such as `<script>` and `{% javascript %}` can contain JavaScript and by default beautification is applied using the `script` rules. When ignored (ie: `true`) Æsthetic will not apply formatting to these regions.

When enabled (ie: `true`) the entire `<script>` region is excluded including indentation levels. If the `<script>` tag is being used to link an external file (eg: `<script src="/path/fle.js"></script>`) and no code is detected between the opening and closing tags then formatting will be applied in accordance with defined rules pertaining to markup.


[Æsthetic Documentation](https://æsthetic.dev/rules/markup/ignoreJS)
