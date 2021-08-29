const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/stockGraphApp/runtime.js',
    './dist/stockGraphApp/polyfills.js',
    './dist/stockGraphApp/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/login-element2.js');
})();