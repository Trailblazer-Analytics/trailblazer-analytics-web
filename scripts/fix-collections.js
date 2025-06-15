// fix-collections.js
// This script helps fix common content collection issues in the Trailblazer Analytics project

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the content directory
const contentDir = path.join(__dirname, '..', 'src', 'content');

// Function to create directories if they don't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Creating directory: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
}

// Function to fix content.config.ts exports
function fixContentConfig() {
  const configPath = path.join(__dirname, '..', 'src', 'content.config.ts');
  
  if (!fs.existsSync(configPath)) {
    console.error('content.config.ts not found!');
    return;
  }
  
  let content = fs.readFileSync(configPath, 'utf8');
  
  // Check if collections are being exported
  if (!content.includes('export const collections')) {
    console.log('Fixing content.config.ts to properly export collections...');
    
    // Add export statement if it doesn't exist
    const exportStatement = '\nexport const collections = { blog, techNotes, caseStudies, whitepapers };\n';
    content += exportStatement;
    
    fs.writeFileSync(configPath, content);
    console.log('Updated content.config.ts to export collections');
  } else {
    console.log('content.config.ts already exports collections correctly');
  }
}

// Function to create placeholder files
function createPlaceholderFile(dirPath, name) {
  const placeholderPath = path.join(dirPath, 'README.md');
  const content = `# ${name} Collection\n\nThis directory contains ${name} content.\n\n*This is a placeholder file to ensure the directory is included in version control.*`;
  
  fs.writeFileSync(placeholderPath, content);
  console.log(`Created placeholder file: ${placeholderPath}`);
}

// Create required content directories
console.log('Checking content directories...');

// Ensure the main content directory exists
ensureDirectoryExists(contentDir);

// Create directories for collections with kebab-case names
const directoriesToCreate = [
  { path: path.join(contentDir, 'blog'), name: 'Blog' },
  { path: path.join(contentDir, 'tech-notes'), name: 'Tech Notes' },
  { path: path.join(contentDir, 'case-studies'), name: 'Case Studies' },
  { path: path.join(contentDir, 'whitepapers'), name: 'Whitepapers' }
];

directoriesToCreate.forEach(dir => {
  if (ensureDirectoryExists(dir.path)) {
    createPlaceholderFile(dir.path, dir.name);
  } else {
    console.log(`Directory already exists: ${dir.path}`);
  }
});

// Fix content.config.ts exports
fixContentConfig();

console.log('Content directory fix completed!');
