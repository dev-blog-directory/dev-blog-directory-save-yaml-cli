#!/usr/bin/env node

'use strict';

const fs = require('fs');
const {resolve} = require('path');
const read = require('node-read-yaml');
const {FAILSAFE_SCHEMA} = require('node-read-yaml');
const {saveAll} = require('dev-blog-directory-save');
const newFilename = 'new.yml';
const templateFilename = '.new.yml';

function main(filepath, reset, options) {
  return read(filepath, {multi: true, schema: FAILSAFE_SCHEMA})
    .then(docs => docs.filter(doc => doc && typeof doc === 'object'))
    .then(docs => saveAll(docs, options))
    .then(() => {
      if (reset === true) {
        fs.copyFileSync(templateFilename, filepath);
      }
    });
}

function exit(msg) {
  if (msg) {
    console.error('\n' + msg);

    process.exit(1);
  }

  process.exit(0);
}

if (require.main === module) { // Called directly
  const argv = require('minimist')(process.argv.slice(2), {boolean: ['merge']});
  let filename = argv._[0];
  const options = {merge: Boolean(argv.merge)};
  let reset = false;
  if (!filename) {
    filename = newFilename;
    reset = true;
  }

  const filepath = resolve(process.cwd(), filename);

  console.log('yaml file name: ' + filename);
  console.log('yaml full path: ' + filepath);
  main(filepath, reset, options)
    .then(() => {
      console.log('Done!');
    })
    .catch(exit);
} else { // Required as a module
  module.exports = main;
}
