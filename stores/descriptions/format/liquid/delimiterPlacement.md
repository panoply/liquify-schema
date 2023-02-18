&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`

&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `false`

#### Delimiter Placement

Controls the placement of opening and closing Liquid tag delimiters (`{%`, `{{`, `}}` and `%}`). This rule provides 3 different formatting options and will ensure that delimiters are beautified in concordance. When the rule is `undefined` it will default to using `none`.

#

---

#### `preserve`

This is the default option. When `delimiterPlacement` is set to `preserve` Æsthetic will skip applying refinements to the delimiters and instead use the provided structure as its point of reference. Below are examples of different delimiter structures that will pass through intact and untouched when using `none` option.

```liquid


<!-- ✓ -->
{% tag %}

<!-- ✓ -->
{%
  tag
%}

<!-- ✓ -->
{% tag
%}

<!-- ✓ -->
{%
 tag %}


```

#### `inline`

_The `inline` option will ensure that delimiters always start and end on the same line. In the example below, notice how **before** formatting the starting (`{%`) and ending (`%}`) delimiters are expressed on newlines whereas **after** formatting they are placed inline._

```liquid

<!-- Before Formatting -->
{%
  liquid
  if condition == assertion
    echo 'hello world!'
  endif
%}

<!-- After Formatting-->
{% liquid
  if condition == assertion
    echo 'hello world!'
  endif %}


```

#### `consistent`

_The `consistent` option will use the opening (`{%` or `{{`) delimiter placement as its reference point for how the closing (`%}` or `}}`) should be formatted. If you were to force the opening delimiter onto a newline then the closing delimiter will also be forced. Notice how in the example below, notice how **before** formatting the ending delimiters (`%}` and `}}`) are not consistent with the starting (`{%` and `}}`) delimiters whereas **after** formatting they adhere to the structure imposed._

<!-- prettier-ignore -->
```liquid


<!-- Before Formatting -->
{% if condition == assertion
%}

  {{
    object.prop }}

{% endif %}

<!-- After Formatting -->
{% if condition == assertion %}

  {{
    object.prop
  }}

{% endif %}
```

#### `implied`

_The `implied` option is typically the best option to use. Implied placement will collectively determine the best placement to apply based on the token type, wrap limit and its overall formation. In the below example, we use a couple of different expressions common in Liquid projects._

**NOTE**

_The `implied` option will never apply forcing to token name identifiers. If you desire that style then use `none` or `consistent`._


```liquid

<!-- Before Formatting -->
{%
  if condition == assertion %}

  {{
    object.prop
    | filter: 'value'
  }}

{% endif %}

{%
  liquid
  if condition == assertion
    echo 'hello world!'
  endif
%}

<!-- After Formatting -->
{% if condition == assertion %}

  {{ object.prop | filter: 'value' }}

{% endif %}

{% liquid
  if condition == assertion
    echo 'hello world!'
  endif
%}
```
