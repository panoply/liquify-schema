**Default** `liquidrc`

💁🏽‍♀️ &nbsp;&nbsp; Recommended setting is `liquidrc`

The configuration method to use. This option defaults to `liquidrc` which means the extension will look for a `.liquidrc` or `.liquidrc.json` file contained in your projects root directory (or relative to the `liquid.config.baseDir` path if provided).

If you set this to `workspace` then the extension will expect settings to be defined within a `.vscode/settings.json` workspace file or if you are not using a project based workspace setting (`.vscode/settings.json`) file then it will look at global workspace (User Preference) settings.

> **NOTE**
>
> When set `workspace` and no configuration settings are defined but a `.liquidrc` file is detected then the extension will use the `.liquidrc` file.

