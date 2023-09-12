
**Default** `[]`

A glob pattern list of file's and/or directories to be ignored from formatting. Use relative paths to exclude or ignore beautification running on certain files or uri path locations within your workspace.

**Tip**

You can also leverage inline ignore comments. Place a Æsthetic ignore comment at the top of files you wish to exclude from beautification, for example:

```liquid

{% # esthetic-ignore %}

```

**Ignoring Next**

Æsthetic support tag level ignored. Annotate tokens that are full formed with ignore next comments to exclude them from formatting:

```liquid

{% # esthetic-ignore %}
<div>
  ALL CODE IN THIS TAG IS EXCLUDED
</div>

```

**Ignoring Regions**

Æsthetic also supports inline ignore comment regions. Wrap the code you wish to exclude from formatting as follows:

```liquid

{% # esthetic-ignore-start %}

  CODE TO EXCLUDE

{% # esthetic-ignore-end %}

```