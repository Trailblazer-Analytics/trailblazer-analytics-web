// fix-build-warnings.js
// This script runs all the fix scripts to address build warnings in the Trailblazer Analytics project

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Trailblazer Analytics - Build Warning Fixer');
console.log('===========================================');
console.log('This script will help address common build warnings.');
console.log('');

// Function to run a script and handle errors
function runScript(scriptName, args = []) {
  const scriptPath = path.join(__dirname, scriptName);
  const command = `node "${scriptPath}" ${args.join(' ')}`;
  
  console.log(`\n>> Running ${scriptName}...\n`);
  
  try {
    const output = execSync(command, { encoding: 'utf8' });
    console.log(output);
    return true;
  } catch (error) {
    console.error(`Error running ${scriptName}:`);
    console.error(error.message);
    return false;
  }
}

// Run all the fix scripts
runScript('fix-collections.js');
runScript('fix-route-collisions.js');
runScript('fix-file-types.js');

console.log('\n===========================================');
console.log('Build warning fixes completed!');
console.log('');
console.log('Next steps:');
console.log('1. Review the output above for any manual actions needed');
console.log('2. Run "pnpm run build" to check if warnings were resolved');
console.log('3. For any remaining warnings, check docs/BUILD_WARNINGS.md for guidance');
console.log('===========================================');
