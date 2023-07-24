**Default** `true`

💁🏽‍♀️ &nbsp;&nbsp; Recommended setting is `true`

Whether or not to enable Liquid defined variable completions. When enabled (ie: `true`) then completions will include variable assignments and captures. The extension also supports re-assignment scoping and iteree array scoping.


**Example**

Below is an example of variable completions when enabled (`true`) which is the default.

```js

{% assign foo = 'hello world' %}

{{ f }} // The assignment foo will be shown in completions

```

