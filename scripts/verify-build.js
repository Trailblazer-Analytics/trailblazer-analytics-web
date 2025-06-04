#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Config
const BASE_PATH = '/trailblazer-analytics-devkit';
const DIST_DIR = path.join(process.cwd(), 'dist');
const ASSET_DIR = path.join(DIST_DIR, 'assets');

// Check if assets directory exists
if (!fs.existsSync(ASSET_DIR)) {
  console.error(chalk.red('❌ Assets directory not found!'));
  process.exit(1);
}

// Get list of CSS files
const cssFiles = fs.readdirSync(ASSET_DIR)
  .filter(file => file.endsWith('.css'))
  .map(file => `${BASE_PATH}/assets/${file}`);

console.log(chalk.blue('📦 Found CSS files:'));
cssFiles.forEach(file => console.log('  ' + chalk.cyan(file)));

// Check HTML files for correct CSS paths
let errors = 0;
const htmlFiles = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      scanDir(fullPath);
    } else if (file.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

scanDir(DIST_DIR);

console.log(chalk.blue(`\n🔍 Checking ${htmlFiles.length} HTML files for CSS references...`));

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relativePath = path.relative(DIST_DIR, file);
  
  // Check if HTML references any CSS files
  const hasAnyCssReference = cssFiles.some(cssFile => {
    return content.includes(cssFile) || content.includes(cssFile.replace(BASE_PATH, ''));
  });
  
  if (!content.includes('<link rel="stylesheet"')) {
    console.log(chalk.yellow(`⚠️ No CSS link found in ${relativePath}`));
  } else if (!hasAnyCssReference) {
    console.log(chalk.red(`❌ CSS references not found in ${relativePath}`));
    errors++;
  } else {
    console.log(chalk.green(`✅ CSS correctly referenced in ${relativePath}`));
  }
});

console.log('\n');
if (errors > 0) {
  console.log(chalk.red(`❌ Found ${errors} files with potentially incorrect CSS references.`));
  console.log(chalk.yellow('Please check these files manually and fix the paths.'));
} else {
  console.log(chalk.green('✅ All CSS references appear to be correct!'));
}

// Check for JS files too
const jsFiles = fs.readdirSync(ASSET_DIR)
  .filter(file => file.endsWith('.js'))
  .map(file => `${BASE_PATH}/assets/${file}`);

console.log(chalk.blue('\n📦 Found JS files:'));
jsFiles.forEach(file => console.log('  ' + chalk.cyan(file)));

console.log(chalk.green('\n✅ Build verification complete!'));
