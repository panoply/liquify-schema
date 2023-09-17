The HOT strategy to use. Syncify supports 2 different replacement strategies and you will need to choose which one to use depending on your project type.

`hydrate`

The hydrate strategy will execute morph replacements. This is what Syncify will default to using, however, it is not always perfect and in cases where you leverage frameworks that use DOM Mutation observers, it is probably better to use `replace`.

`replace`

The replace strategy will execute fragment swaps using `replaceWith` instead of morphs when executing HOT reloads. It works almost identically to `hydrate` but respects DOM mutations. If you are leveraging a framework like Stimulus or Alpine, then choose this strategy.

