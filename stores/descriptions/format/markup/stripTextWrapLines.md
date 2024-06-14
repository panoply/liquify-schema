Whether or not Æsthetic should strip newline occurrences when applying word-wrap on text content. This rule will only take effect if a word wrap limit has been defined via `wrap` option. When enabled, Æsthetic will remove newline occurrences from text identified content and produce a strictly formed wrap.

By default, this rule is `false` and Æsthetic will preserve newlines within text content, ensuring that newline occurrences adhere to the `preserveLine` limit regardless of whether or not a `wrap` limit has been set. Setting this to `true` will override `preserveLine` within text specific content and instead refer to the `wrap` limitation.

> **NOTE**
>
> If you have set `preserveText` to `true` this rule will be ignored, as `preserveText` take precedence and
> will override all text content related formatting options.

[Æsthetic Documentation](https://aesthetic.js.org/rules/markup/stripTextWrapLines/)