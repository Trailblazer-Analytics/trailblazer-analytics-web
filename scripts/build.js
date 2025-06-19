// This script ensures that the .nojekyll file is created in the dist folder
// and performs any other post-build tasks needed for GitHub Pages

import fs from 'fs';
import path from 'path';

// Create .nojekyll file
const nojekyllPath = path.join(process.cwd(), 'dist', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file');

// Add any other post-build processing here
console.log('Post-build processing complete');
