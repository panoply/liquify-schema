const { join, basename } = require('node:path');
const { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } = require('node:fs');
const cwd = process.cwd();

const MINIFY = 0;

/**
 * Ensure we are only traversing JSON files.
 * These must be passed in order of injection dependants
 */
const FILES = [

  // ÆSTHETIC
  'esthetic.json',

  // LIQUIDRC
  'liquidrc.json',

  // SHOPIFY SPECIFICS
  'shopify-sections.json',
  'shopify-section-groups.json',
  'shopify-locales.json',
  'shopify-settings_data.json',
  'shopify-templates.json',
  'shopify-settings_schema.json',

  // FUTURE SHIT
  'specifications.json',

  // VSCODE CONFIG
  'vscode-configuration.json',

  // THEME DOCS
  'theme-docs-objects.json',
  'theme-docs-filters.json',

  // SYNCIFY

  'syncify.json',
  'syncify-env.json',
  'syncify-package-json.json',
  'syncify-shared-schema.json'
];

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
 * Obtains JSON Objects from another file
 */
const injectShared = /(?<="injectShared":\s)"\.\/.*"/g;

/**
 * Capture Object Injection
 */
const captureInjectShared = /\{\s*"injectShared":\s"\.\/.*"\s*}|\s*"injectShared":\s"\.\/.*"/g;
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

  const normalizeUrl = file.replace(/([/.]+)(?=\.\/[a-z])/, '');
  const read = readFileSync(join(stores, normalizeUrl), { encoding: 'utf8' });
  const stringify = JSON.stringify(read, 0).trim();

  // console.log('\n\n' + file + '\n\n', stringify);

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

  const sharedDir = join(stores, 'shared');
  /**
   * The files within shared directory
   */
  const shared = readdirSync(sharedDir).map(uri => join(sharedDir, uri));

  /**
   * Store model which will hold the parsed values
   */
  const store = {};

  try {

    for (const file of shared) {

      /**
       * The contents of the JSON file
       */
      let json = readFileSync(file, { encoding: 'utf8' });

      /**
       * Populated the files markdown
       */
      json = importMarkdown(json);

      /**
       * Minification of JSON
       */
      store[basename(file)] = JSON.parse(json);

      if ('$schema' in store[basename(file)]) delete store[basename(file)].$schema;

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

  const shared = getShared();

  /* -------------------------------------------- */
  /* LOOP THROUGH FILES                           */
  /* -------------------------------------------- */

  for (const file of FILES) {

    /**
     * The full URI file path location of this file.
     */
    const uri = join(stores, file);

    try {
      /**
       * The contents of the JSON file
       */
      let json = readFileSync(uri, { encoding: 'utf8' });

      if (injectShared.test(json)) {

        const from = json.match(captureInjectShared);

        if (from !== null) {

          for (const content of from) {

            /**
             * Get the `injectShared` property value
             */
            const getProp = content.match(injectShared);

            /**
             * Extract the injection file name path, slice out quotations
             */
            let fileName = basename(getProp[0].slice(1, -1));

            /**
             * Extract the property to inject on
             */
            let onProp;

            /**
             * Check for a hash # value for injections which point to a
             * specific reference within an external file.
             */
            const hashidx = fileName.indexOf('#');

            if (hashidx > -1) {

              /**
               * Extract the property to inject on
               */
              onProp = fileName.slice(hashidx + 1);
              fileName = fileName.slice(0, hashidx);

            }

            if (fileName in shared) {

              /**
               * The shared entry to inject
               */
              let sharedObj = shared[fileName];

              if (typeof onProp === 'string') {

                if ('properties' in shared[fileName]) {

                  if (onProp in shared[fileName].properties) {

                    console.log(`SHARED INJECT IN PROPERTIES: ${file} > ${fileName} > ${onProp}`);
                    sharedObj = shared[fileName].properties[onProp];

                  } else if (onProp in shared[fileName]) {

                    console.log(`SHARED INJECT IN OBJECT: ${file} > ${fileName} > ${onProp}`);
                    sharedObj = shared[fileName][onProp];

                  } else {

                    throw new Error('Cannot find property key to inject ' + onProp);
                  }

                } else if (onProp in shared[fileName]) {

                  console.log(`SHARED INJECT IN OBJECT: ${file} > ${fileName} > ${onProp}`);

                  sharedObj = shared[fileName][onProp];

                } else {

                  throw new Error('No property in shared schema injection ' + onProp);
                }
              } else {

                console.log(`SHARED INJECT: ${file} > ${fileName}`);

              }
              /**
               * We have an object
               * {
               *   "injectShared": "./xxx/file.json"
               * }
               */
              if (content.trim()[0] === '{') {
                if (Array.isArray(shared[fileName])) {
                  json = json.replace(content, JSON.stringify(sharedObj, 0).slice(1, -1));
                } else {
                  json = json.replace(content, JSON.stringify(sharedObj));
                }
              } else {

                /**
                 * We have a property injection
                 * {
                 *   "injectShared": "./xxx/file.json",
                 *   "anotherProp": ""
                 * }
                 */

                if (typeof shared[fileName] === 'object') {

                  json = json.replace(content, JSON.stringify(sharedObj, 0).slice(1, -1));

                } else {

                  throw new Error('Cannot spread non object types on property structure injections');
                }

              }
            } else {

              throw new Error('Cannot file shared file at: ' + fileName);

            }

          }
        }

      }

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
              if ('properties' in parseJson && name in parseJson.properties) {
                console.log(`INJECT FROM PROPERTIES: ${file} > ${fileName} > ${name}`);
                parseJson = parseJson.properties[name];
              } else if ('definitions' in parseJson && name in parseJson.definitions) {
                console.log(`INJECT FROM DEFINITIONS: ${file} > ${fileName} > ${name}`);
                parseJson = parseJson.definitions[name];
              }
            }

            const getMarkdown = importMarkdown(JSON.stringify(parseJson));
            const imported = JSON.parse(getMarkdown);
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
      const minify = JSON.stringify(JSON.parse(json), null, MINIFY);

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

    } catch (e) {

      console.error('File: ' + uri, e);

    }

  }

}

mapContent();
