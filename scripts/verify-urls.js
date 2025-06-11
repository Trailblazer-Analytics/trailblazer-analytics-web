#!/usr/bin/env node
/**
 * Verify all URLs in HTML files to ensure they are correct
 * Checks for:
 * 1. Protocol-relative URLs (href="//path")
 * 2. Missing leading slashes (href="path" instead of href="/path")
 * 3. Double slashes (href="//path" or href="/path//subpath")
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

// Stats
let protocolRelativeUrls = 0;
let missingLeadingSlashes = 0;
let doubleSlashes = 0;
let totalFiles = 0;

/**
 * Check an HTML file for URL issues
 */
function checkHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(DIST_DIR, filePath);
  let fileHasIssues = false;
  
  // Check for protocol-relative URLs
  const protocolRelativeRegex = /href="\/\/(?!www\.|http|https|ftp)[^"]+"/g;
  const protocolRelativeMatches = content.match(protocolRelativeRegex);
  
  if (protocolRelativeMatches) {
    console.log(chalk.red(`❌ Found ${protocolRelativeMatches.length} protocol-relative URLs in ${relativePath}:`));
    protocolRelativeMatches.forEach(match => {
      console.log(`   ${match}`);
    });
    protocolRelativeUrls += protocolRelativeMatches.length;
    fileHasIssues = true;
  }
  
  // Check for internal links without leading slash
  // This is a simplification - exclude common external links and anchor links
  const missingSlashRegex = /href="(?!\/|#|https:|http:|mailto:|tel:|\/\/|javascript:)[^"]+"/g;
  const missingSlashMatches = content.match(missingSlashRegex);
  
  if (missingSlashMatches) {
    console.log(chalk.yellow(`⚠️ Found ${missingSlashMatches.length} links without leading slash in ${relativePath}:`));
    missingSlashMatches.forEach(match => {
      console.log(`   ${match}`);
    });
    missingLeadingSlashes += missingSlashMatches.length;
    fileHasIssues = true;
  }
  
  // Check for double slashes in paths (excluding protocol)
  const doubleSlashRegex = /href="\/[^"]*\/\/[^"]*"/g;
  const doubleSlashMatches = content.match(doubleSlashRegex);
  
  if (doubleSlashMatches) {
    console.log(chalk.red(`❌ Found ${doubleSlashMatches.length} URLs with double slashes in ${relativePath}:`));
    doubleSlashMatches.forEach(match => {
      console.log(`   ${match}`);
    });
    doubleSlashes += doubleSlashMatches.length;
    fileHasIssues = true;
  }
  
  if (!fileHasIssues) {
    console.log(chalk.green(`✅ No URL issues found in ${relativePath}`));
  }
  
  return fileHasIssues;
}

/**
 * Recursively scan directories for HTML files
 */
function scanDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let filesWithIssues = 0;
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      filesWithIssues += scanDir(fullPath);
    } else if (file.name.endsWith('.html')) {
      totalFiles++;
      if (checkHtmlFile(fullPath)) {
        filesWithIssues++;
      }
    }
  }
  
  return filesWithIssues;
}

console.log(chalk.blue('🔍 Scanning HTML files for URL issues...'));
const filesWithIssues = scanDir(DIST_DIR);

console.log('\n' + chalk.blue('📊 URL Check Summary:'));
console.log(`Total HTML files checked: ${totalFiles}`);
console.log(`Files with issues: ${filesWithIssues}`);
console.log(`Protocol-relative URLs: ${protocolRelativeUrls}`);
console.log(`Missing leading slashes: ${missingLeadingSlashes}`);
console.log(`Double slashes: ${doubleSlashes}`);

if (filesWithIssues > 0) {
  console.log('\n' + chalk.red('❌ Found URL issues in the build!'));
  process.exit(1);
} else {
  console.log('\n' + chalk.green('✅ All URLs look good!'));
  process.exit(0);
}
