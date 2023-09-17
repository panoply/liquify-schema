Sections can be structured within sub-directories. If a section file is determined to be deeply nested in such a way then this option will enable parent directory name prefixing to be applied the filenames. Prefixing is helpful when you have a large number of sections and want to avoid name collisions. You can control what sub-directories should have pre-fixing applied using the `global[]` option or alternatively do not reference paths to sections which contain sub directories.

**Example**

If this option is set to `true` and a section path is `source/sections/index/some-file.liquid` then the filename will be prefixed with `index` when it is being written to your defined **output** directory. When referencing it within themes you'd need to use `index_some-file.liquid`
