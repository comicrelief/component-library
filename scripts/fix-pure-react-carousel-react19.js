/**
 * pure-react-carousel deepmerge treats plain objects as mergeable. React 19 elements
 * use $$typeof === Symbol.for('react.transitional.element'), but the library only
 * excluded Symbol.for('react.element'), so it tried to deep-merge element trees and
 * overflowed the stack. React.isValidElement covers all element types.
 *
 * Remove this script when pure-react-carousel ships an upstream fix.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const files = [
  'node_modules/pure-react-carousel/dist/index.es.js',
  'node_modules/pure-react-carousel/dist/index.cjs.js'
];

const from = 'function isReactElement(e){return e.$$typeof===REACT_ELEMENT_TYPE}';
const to = 'function isReactElement(e){return React.isValidElement(e)}';

for (const rel of files) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    // Package not installed (e.g. CI pruning) — skip quietly
    continue;
  }
  const src = fs.readFileSync(abs, 'utf8');
  if (src.includes(to)) {
    continue;
  }
  if (!src.includes(from)) {
    console.warn(
      `[fix-pure-react-carousel-react19] Expected snippet missing in ${rel}; skip (version changed?)`
    );
    continue;
  }
  fs.writeFileSync(abs, src.split(from).join(to), 'utf8');
  console.log(`[fix-pure-react-carousel-react19] Patched ${rel}`);
}
