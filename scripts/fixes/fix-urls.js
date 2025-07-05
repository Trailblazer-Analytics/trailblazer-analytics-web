#!/usr/bin/env node
/**
 * Fix protocol-relative URLs in HTML files
 * This script replaces href="//path" with href="/path" in all HTML files
 * Also fixes other common URL issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
const DIST_DIR = path.join(path.resolve(__dirname, '..'), 'dist');

// Function to process HTML files
function fixProtocolRelativeUrls(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if there are any protocol-relative URLs
  const hasProtocolRelativeUrls = content.includes('href="//') && !content.includes('href="//www.') && !content.includes('href="//http');
  
  // Check for URLs with double slashes (not protocol-relative)
  const hasDoubleSlashes = /href="\/[^"]*\/\/[^"]*"/.test(content);
  
  if (!hasProtocolRelativeUrls && !hasDoubleSlashes) {
    return false;
  }
  
  // Replace protocol-relative URLs with absolute paths
  // But be careful not to change external links like "//www.example.com"
  let fixedContent = content.replace(/href="\/\/(?!www\.|http|https|ftp)/g, 'href="/');
  
  // Also fix double slashes in paths
  fixedContent = fixedContent.replace(/href="(\/[^"]*)\/{2,}([^"]*)"/g, 'href="$1/$2"');
  
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  return true;
}

// Function to recursively scan directories
function scanDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let fixedFiles = 0;
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      fixedFiles += scanDir(fullPath);
    } else if (file.name.endsWith('.html')) {
      if (fixProtocolRelativeUrls(fullPath)) {
        console.log(chalk.green(`✓ Fixed URLs in ${fullPath.replace(DIST_DIR, '')}`));
        fixedFiles++;
      }
    }
  }
  
  return fixedFiles;
}

console.log(chalk.blue('🔍 Scanning HTML files for protocol-relative URLs...'));
const fixedFiles = scanDir(DIST_DIR);

if (fixedFiles > 0) {
  console.log(chalk.green(`✅ Fixed ${fixedFiles} HTML files with URL issues`));
} else {
  console.log(chalk.yellow('ℹ️ No URL issues found'));
}

// Perform a final check to make sure all issues were fixed
const finalCheck = () => {
  console.log(chalk.blue('\n🔍 Performing final URL verification...'));
  
  let foundIssues = false;
  
  const checkDir = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        checkDir(fullPath);
      } else if (file.name.endsWith('.html')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Check for remaining protocol-relative URLs
        if (content.includes('href="//') && !content.includes('href="//www.') && !content.includes('href="//http')) {
          console.log(chalk.red(`❌ Still found protocol-relative URLs in ${fullPath.replace(DIST_DIR, '')}`));
          foundIssues = true;
        }
        
        // Check for double slashes
        if (/href="\/[^"]*\/\/[^"]*"/.test(content)) {
          console.log(chalk.red(`❌ Still found double slashes in ${fullPath.replace(DIST_DIR, '')}`));
          foundIssues = true;
        }
      }
    }
  };
  
  checkDir(DIST_DIR);
  
  if (!foundIssues) {
    console.log(chalk.green('✅ All URL issues have been fixed!'));
  }
};

finalCheck();
