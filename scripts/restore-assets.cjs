// Reconstruct large academic resources from Git-tracked pieces before React build.
const fs = require('fs');
const path = require('path');
const manifest = require('../asset-parts.json');
for (const item of manifest) {
  const out = path.resolve(__dirname, '..', item.output);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const buffers = item.parts.map(p => fs.readFileSync(path.resolve(__dirname, '..', p)));
  fs.writeFileSync(out, Buffer.concat(buffers));
  const actual = fs.statSync(out).size;
  if (actual !== item.bytes) throw new Error(`Asset size mismatch: ${item.output} (${actual} vs ${item.bytes})`);
  console.log(`Restored ${item.output}`);
}
