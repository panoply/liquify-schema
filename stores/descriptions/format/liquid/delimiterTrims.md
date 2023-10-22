### Delimiter Trims

How delimiter whitespace trim dashes (`{%-`, `-%}`, `{{-` and `-}}`) should handled in Liquid tags and output object tokens. You should _maybe_ avoid setting this to `force` in order to avoid stripping whitespace in cases where text content contains Liquid.

> **NOTE**
>
> This rule will not touch Liquid tokens encapsulated within strings, ie: `"{{ foo }}"` or `'{{ foo }}'` are left intact.


**Options**

This is a Liquid specific formatting rule which defaults to using `preserve` when no option has been specified.

- preserve
- tags
- outputs
- never
- always
- multiline


[Æsthetic Documentation](https://aesthetic.js.org/rules/liquid/delimiterTrims/)

