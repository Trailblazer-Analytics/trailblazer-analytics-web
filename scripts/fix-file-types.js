// fix-file-types.js
// This script helps identify and fix unsupported file types in the Trailblazer Analytics project

const fs = require('fs');
const path = require('path');

// Define the pages directory
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

// Function to find unsupported file types
function findUnsupportedFiles() {
  console.log('Checking for unsupported file types...');
  
  const unsupportedFiles = [];
  
  // Known problematic files
  const knownIssues = [
    path.join(pagesDir, 'insights.astro.fixed')
  ];
  
  // Check if these files exist
  knownIssues.forEach(file => {
    if (fs.existsSync(file)) {
      unsupportedFiles.push(file);
    }
  });
  
  // General check for .fixed files
  function findFixedFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        findFixedFiles(fullPath);
      } else if (file.name.endsWith('.fixed') && !unsupportedFiles.includes(fullPath)) {
        unsupportedFiles.push(fullPath);
      }
    }
  }
  
  findFixedFiles(pagesDir);
  
  return unsupportedFiles;
}

// Function to suggest fixes for unsupported files
function suggestFixes(unsupportedFiles) {
  if (unsupportedFiles.length === 0) {
    console.log('No unsupported file types found.');
    return;
  }
  
  console.log('\nFound the following unsupported files:');
  unsupportedFiles.forEach(file => {
    console.log(`\nFile: ${file}`);
    
    const fileName = path.basename(file);
    const dirName = path.dirname(file);
    const baseName = fileName.replace(/\.fixed$/, '');
    
    console.log('\nRecommended fixes:');
    console.log(` 1. Rename to underscore prefix: ${path.join(dirName, '_' + fileName)}`);
    console.log(`    Run: node scripts/fix-file-types.js --prefix ${file}`);
    
    console.log(` 2. Remove .fixed extension: ${path.join(dirName, baseName)}`);
    console.log(`    Run: node scripts/fix-file-types.js --remove-ext ${file}`);
    
    console.log(` 3. Delete the file`);
    console.log(`    Run: node scripts/fix-file-types.js --delete ${file}`);
  });
}

// Function to prefix a file with underscore
function prefixFile(filePath) {
  const dirName = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const newPath = path.join(dirName, '_' + fileName);
  
  // Create a backup
  const backupPath = filePath + '.bak';
  fs.copyFileSync(filePath, backupPath);
  console.log(`Created backup: ${backupPath}`);
  
  // Rename the file
  fs.renameSync(filePath, newPath);
  console.log(`Renamed file to: ${newPath}`);
  
  return true;
}

// Function to remove .fixed extension
function removeExtension(filePath) {
  const dirName = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const baseName = fileName.replace(/\.fixed$/, '');
  const newPath = path.join(dirName, baseName);
  
  // Create a backup
  const backupPath = filePath + '.bak';
  fs.copyFileSync(filePath, backupPath);
  console.log(`Created backup: ${backupPath}`);
  
  // Rename the file
  fs.renameSync(filePath, newPath);
  console.log(`Renamed file to: ${newPath}`);
  
  return true;
}

// Function to delete a file
function deleteFile(filePath) {
  // Create a backup
  const backupPath = filePath + '.bak';
  fs.copyFileSync(filePath, backupPath);
  console.log(`Created backup: ${backupPath}`);
  
  // Delete the file
  fs.unlinkSync(filePath);
  console.log(`Deleted file: ${filePath}`);
  
  return true;
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--prefix')) {
    const fileIndex = args.indexOf('--prefix') + 1;
    if (fileIndex < args.length) {
      const file = args[fileIndex];
      prefixFile(file);
    } else {
      console.error('No file specified for --prefix');
    }
  } else if (args.includes('--remove-ext')) {
    const fileIndex = args.indexOf('--remove-ext') + 1;
    if (fileIndex < args.length) {
      const file = args[fileIndex];
      removeExtension(file);
    } else {
      console.error('No file specified for --remove-ext');
    }
  } else if (args.includes('--delete')) {
    const fileIndex = args.indexOf('--delete') + 1;
    if (fileIndex < args.length) {
      const file = args[fileIndex];
      deleteFile(file);
    } else {
      console.error('No file specified for --delete');
    }
  } else {
    const unsupportedFiles = findUnsupportedFiles();
    suggestFixes(unsupportedFiles);
  }
}

// Run the script
main();
