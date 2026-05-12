const path = require('path');
const { execFileSync } = require('child_process');

// Legacy entrypoint kept for manual use. Delegate to the TypeScript generator
// so sitemap policy, noindex exclusions, and duplicate checks stay centralized.
const tsxBin = path.join(
  __dirname,
  '..',
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'tsx.cmd' : 'tsx'
);

execFileSync(tsxBin, [path.join(__dirname, 'build-sitemap.ts')], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
});
