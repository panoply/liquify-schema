Accepts a string list of flags that enable Syncify to wrangle CFH (`{{ content_for_header }}`) slop. By default, Syncify automatically applies the `--no-preview-bar` flag.

> `--no-preview-bar`
>
> Automatically hides the preview bar
>
> `--no-web-pixels-manager`
>
> Prevents the WPM evaluation from ocurring and blocks the CFH injection scripting
>
> `--no-checkout-preloads`
>
> Prevents the checkout preload tags from injecting. In development, you don't need them.
>
> `--no-shopify-features`
>
> Prevents the Shopify Features scripting from evaluating and blocks the CFH injections.
>
> `--no-trekkie`
>
> Prevents Trekkie from evaluating, helping per-page navigation performance in development.
>
> `--no-perfkit`
>
> Prevents Perfkit scripting from evaluating and the CFH injections.