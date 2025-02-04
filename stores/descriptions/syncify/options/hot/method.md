Which live reload method should Syncify use?

> `hot`
>
> Hot reloads assets and views with automatic refresh upon changes, performing partial replacements and morphing.
>
> `reload`
>
> Similar to `hot` but applied for `<body>` replacements for every markup change invoked. Asset pipeline is still respected.
>
> `refresh`
>
> Invokes a full page refresh after changes have been applied. This is not **real** hot reloading, it is fake, basically what the Shopify CLI does, but faster. In most cases you should choose `hot` or `reload` unless you really need hard refreshes.

