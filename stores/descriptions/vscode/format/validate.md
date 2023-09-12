**Default** `true`

Æsthetic will perform parse validations and throw when invalid syntax structures are detected. You can disable this behavior if you are writing shitty code or using the Shopify Dawn theme (which is both chaotic and riddled in bad practices). Disabling validations is required in some cases in order to have Æsthetic allows bad syntactical structures to pass through, but please be aware that this may result in untended output and break your code.

When **enabled** (i.e: `true`) Æsthetic will return hints and parse error locations to help you debug the issue.