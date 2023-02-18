&nbsp;⚙️&nbsp;&nbsp;&nbsp;**Default** `false`

&nbsp;💁🏽‍♀️&nbsp;&nbsp;&nbsp;Recommended setting is `true`

### Self Close SVG

Whether or not SVG type tags should be converted to self closing void  types. When enabled, tags which contain a closing tag will instead become void type.


#

---

#### Example

```html
<!-- Before Formatting -->
<svg>
  <path d="M.865 15.978a.5.5"></path>
</svg>

<!-- After Formatting -->
<svg>
  <path d="M.865 15.978a.5.5" />
</svg>
```
