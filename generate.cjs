const { join } = require('node:path');
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('node:fs');

const cwd = process.cwd();

if (!existsSync(join(cwd, 'package'))) mkdirSync(join(cwd, 'package'));

/**
 * The working directory
 */
const stores = join(cwd, 'stores');

/**
 * Obtains Markdown Descriptions
 */
const markdown = /(?<="(markdownDescription|deprecationMessage)":\s")\.\/.*(?=")/g;

/**
 * Capture Object Injection
 */
const captureInjectObjects = /(?<=:\s)\{\s*"injectObject":\s"\.\/.*"\s*}/g;

/**
 * Obtains JSON Objects from another file
 */
const injectObjects = /(?<="injectObject":\s)"\.\/.*"/;

/**
 * Obtains JSON from another file
 */
const injectProperties = /(?<="injectProperties":\s)"\.\/.*"/g;

/**
 * Replaces the `injectProperties` with `properties`
 */
const replace = /(?<=")injectProperties(?=")/g;

/**
 * Read and stringify the markdown file contents.
 *
 * @param {string} file The file name
 */
function readMarkdownFile (file) {

  const read = readFileSync(join(stores, file), { encoding: 'utf8' });
  const stringify = JSON.stringify(read, 0).trim();

  return stringify;

}

function importMarkdown (json) {

  if (!json) return json;

  /**
   * Find all `markdownDescription` properties
   */
  const find = json.match(markdown);

  if (find !== null) {

    /**
     * Loop over each occurance of the property
     * and inject the relative markdown file contents.
     */
    for (const filePath of find) {

      /**
       * Read Markdown file
       */
      const stringifyMarkdown = readMarkdownFile(filePath);

      /**
       * Execute markdown injection
       */
      json = json.replace(new RegExp('"' + filePath + '"', 'g'), stringifyMarkdown);

    }
  }

  return json;
}

function getShared () {

  /**
   * Store model which will hold the parsed values
   */
  const store = {};

  /**
   * These are internal references used for injections.
   * The `from` property value **MUST** be indentical to
   * the strings provided here, this includes the `./` prefix.
   */
  const shared = [
    './shared/shopify/languages.json',
    './shared/shopify/input-snippets.json',
    './shared/shopify/input-settings.json'
  ];

  try {

    for (const file of shared) {

      const uri = join(stores, file);

      /**
       * The contents of the JSON file
       */
      let json = readFileSync(uri, { encoding: 'utf8' });

      /**
       * Populated the files markdown
       */
      json = importMarkdown(json);

      /**
       * Minification of JSON
       */
      store[file] = JSON.parse(json);

    }

  } catch (e) {

    console.error(e);

  }

  return store;

}

/**
 * Traverse each JSON store file and apply injections
 */
function mapContent () {

  try {

    // const shared = getShared();

    /**
     * Ensure we are only traversing JSON files.
     */
    const items = [
      'esthetic.json',
      'liquidrc.json',
      'syncify.json',
      'shopify-sections.json',
      'shopify-section-groups.json',
      'shopify-locales.json',
      'shopify-settings_data.json',
      'shopify-templates.json',
      'shopify-settings_schema.json',
      'specifications.json',
      'vscode-configuration.json',
      'theme-docs-objects.json',
      'theme-docs-filters.json',
      'syncify-env.json',
      'syncify-shared-sections.json'
    ];

    /* -------------------------------------------- */
    /* LOOP THROUGH FILES                           */
    /* -------------------------------------------- */

    for (const file of items) {

      /**
       * The full URI file path location of this file.
       */
      const uri = join(stores, file);

      /**
       * The contents of the JSON file
       */
      let json = readFileSync(uri, { encoding: 'utf8' });

      /**
       * Parse the recently read file - this where we will inject definitions
       */
      // const parsed = JSON.parse(json);

      /**
       * The inject definitions is a global property, we simply need reference for injection
       */
      // if ('injectDefinitions' in parsed) {

      //   if (Array.isArray(parsed.injectDefinitions)) {

      //     for (const { from, refs } of parsed.injectDefinitions) {

      //       if (!('definitions' in parsed)) parsed.definitions = {};

      //       if (from in shared) {

      //         console.log('Injecting Definitions from: ' + from);

      //         for (const ref of refs) {
      //           parsed.definitions[ref] = shared[from][ref];
      //         }

      //         delete parsed.injectDefinitions;

      //       } else {
      //         return console.error('Shared injection was not found. Ensure the shared[] values match');
      //       }

      //     }
      //   } else if (typeof parsed.injectDefinitions === 'string') {

      //     if (parsed.injectDefinitions in shared) {

      //       if (!('definitions' in parsed)) parsed.definitions = {};

      //       for (const ref in shared[parsed.injectDefinitions]) {
      //         parsed.definitions[ref] = shared[parsed.injectDefinitions][ref];
      //       }

      //       delete parsed.injectDefinitions;

      //     } else {
      //       return console.error('Shared injection was not found. Ensure the shared[] values match');
      //     }

      //   }

      //   json = JSON.stringify(parsed, null, 2);

      // }

      /**
       * Lets test for the existence of object injections.
       * This will obtain an external file and inject it where specified.
       */
      if (captureInjectObjects.test(json)) {

        const from = json.match(captureInjectObjects);

        if (from !== null) {

          for (const content of from) {

            /**
             * Get the `injectObject` property value
             */
            const getProp = content.match(injectObjects);

            /**
             * Extract the injection file name path, slice out quotations
             */
            let fileName = getProp[0].slice(1, -1);

            /**
             * Check for a hash # value for injections which point to a
             * specific reference within an external file.
             */
            const hashidx = fileName.indexOf('#');

            /**
             * The property to inject from the referenced file name
             */
            let name;

            if (hashidx > -1) {
              name = fileName.slice(hashidx + 1);
              fileName = fileName.slice(0, hashidx);
            }

            const readFile = readFileSync(join(stores, fileName), { encoding: 'utf8' });

            let parseJson = JSON.parse(importMarkdown(readFile));

            if (typeof name === 'string') {
              parseJson = parseJson.properties[name];
            }

            const imported = JSON.parse(importMarkdown(JSON.stringify(parseJson)));
            const stringify = JSON.stringify(imported);

            json = json.replace(content, stringify);

          }
        }
      }

      /**
       * Lets test for the existence of property injections.
       * This will obtain an external file and inject it where specified.
       */
      if (injectProperties.test(json)) {

        const from = json.match(injectProperties);

        console.log(from);

        if (from !== null) {

          for (const content of from) {

            /**
             * Extract the injection file name path, slice out quotations
             */
            let fileName = content.slice(1, -1);

            /**
             * Check for a hash # value for injections which point to a
             * specific reference within an external file.
             */
            const hashidx = fileName.indexOf('#');

            /**
             * The property to inject from the referenced file name
             */
            let name;

            if (hashidx > -1) {
              name = fileName.slice(hashidx);
              fileName = fileName.slice(0, hashidx);
            }

            const readFile = readFileSync(join(stores, fileName), { encoding: 'utf8' });

            let parseJson = JSON.parse(readFile);

            if (typeof name === 'string') {
              parseJson = parseJson[name];
            }

            const stringify = JSON.stringify(parseJson);
            json = json
              .replace(content, stringify)
              .replace(replace, 'properties');

          }
        }
      }

      json = importMarkdown(json);

      /**
       * Minification of JSON
       */
      const minify = JSON.stringify(JSON.parse(json), 0);

      if (file.startsWith('theme-docs')) {

        const dirName = join(cwd, 'package', 'theme-docs');
        const name = file.split('-').filter(Boolean);

        if (!existsSync(dirName)) mkdirSync(dirName);

        writeFileSync(join(cwd, 'package', 'theme-docs', name[name.length - 1]), minify);

      } else {

        /**
         * Obtain snake cased JSON file names
         */
        const snakes = file.match(/^\w+-/);

        /**
         * Rename and Re-path files using snake-case format.
         * These files will be output into their own directory
         */
        if (snakes !== null) {

          const dirName = join(cwd, 'package', snakes[0].slice(0, snakes[0].indexOf('-')));
          const name = file.replace(snakes[0], snakes[0].replace('-', '/'));

          if (!existsSync(dirName)) mkdirSync(dirName);

          writeFileSync(join(cwd, 'package', name), minify);

        } else {
          writeFileSync(join(cwd, 'package', file), minify);
        }
      }

    }

  } catch (e) {

    console.error(e);

  }

}

mapContent();
