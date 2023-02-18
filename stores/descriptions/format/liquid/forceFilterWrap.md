&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `0`

&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `60`

#### Force Filter Wrap

Forces filter pipes `|` onto newlines when the filters contained on the token exceed the defined wrap limit. By default, filters will be forced according to the global `wrap` limit defined.

#

---

### Example

_Below is an example with this rule set to a value of `60`. Only one of the contained output tags in the sample will be forced as the length of the entire tag exceeds the fake wrap limit._

```liquid

{% # We will assume the document wrap length is 80 and is the width of this comment %}

<!-- This tag will not force -->
{{ object.prop | filter: 'one'  | filter_2: 'two' }}

<!-- This tag will is forced as it would exceed the 60 wrap limit -->
{{ object.prop
  | filter: 'one'
  | filter_2: 'two'
  | filter_3: 'three'
}}

```
