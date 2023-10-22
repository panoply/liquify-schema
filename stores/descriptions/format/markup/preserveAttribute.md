Whether or not markup tags should have their insides preserved, ie: attributes. This option is only available to markup and does not support child tokens that require a different lexer. When enabled, this rule will run precedence and override all attribute related rules.

If you're working with a JavaScript framework that implements a data-attribute development based architecture (like Alpine or Angular) which requires a build-step then this rule _might_ help prevent Æsthetic augmenting code or failing when it encounters otherwise invalid structures not supported or recognized by official markup based language specifications.


[Æsthetic Documentation](https://aesthetic.js.org/rules/markup/preserveAttribute/)