### Strip Attribute Lines

Whether or not newlines contained within tag attributes or preserved. This rule will be used along side the `forceAttribute` rule and when enabled (`true`) will strip newlines contained in HTML attributes. When disabled (`false`) then newlines will be preserved according to the **global** `preserveLine` limit defined.

This rule wil only take effect when `forceAttribute` is enabled (ie: `true`) or the `forceAttribute` limit has been exceeded as per the provided value. In addition to `forceAttribute`, the global `preserveLine` rule value is used to determine the amount of lines allowed.


[Æsthetic Documentation](https://æsthetic.dev/rules/markup/stripAttributeLines/)
