const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'dist', 'esm', 'package.json');

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, `${JSON.stringify({ type: 'module' }, null, 2)}\n`);
