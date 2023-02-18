&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `true`

&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `false`

#### Force Lead Argument

Whether or not to force the lead argument in multiline expressions. Typically used when `lineBreakSeparator` is set to `before`.

---

### Example

_Below is an example with this rule is enabled (ie `false`). Notice how the leading argument is kept inline but all proceeding arguments are forced. In the sample, it is assumed that `lineBreakSeparator` is set to `before`_

```liquid

<!-- This tag will not force -->
{{ object.prop
  | filter: 'one'
  | filter_2:
    arg_1: 'foo'
    , arg_2: 'bar'
    , arg_3: 'baz'
  | filter_3: 'three'
}}

<!-- This tag will is forced as it would exceed the 60 wrap limit -->
{{ object.prop
  | filter: 'one'
  | filter_2: arg_1: 'foo'
   , arg_2: 'bar'
   , arg_3: 'baz'
  | filter_3: 'three'
}}

```
