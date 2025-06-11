#!/usr/bin/env node
/**
 * Verify all URLs in HTML files to ensure protocol-relative URLs are fixed
 * This script checks for href="//path" patterns in all HTML files
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

// Flag to track if any protocol-relative URLs were found
let foundProtocolRelativeUrls = false;

/**
 * Check an HTML file for protocol-relative URLs
 */
function checkHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(DIST_DIR, filePath);
  
  // Check for protocol-relative URLs
  const protocolRelativeRegex = /href="\/\/(?!www\.|http|https|ftp)[^"]+"/g;
  const protocolRelativeMatches = content.match(protocolRelativeRegex);
  
  if (protocolRelativeMatches) {
    console.log(chalk.red(`❌ Found ${protocolRelativeMatches.length} protocol-relative URLs in ${relativePath}:`));
    protocolRelativeMatches.forEach(match => {
      console.log(`   ${match}`);
    });
    foundProtocolRelativeUrls = true;
    return protocolRelativeMatches.length;
  }
  
  return 0;
}

/**
 * Recursively scan directories for HTML files
 */
function scanDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let totalIssues = 0;
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      totalIssues += scanDir(fullPath);
    } else if (file.name.endsWith('.html')) {
      totalIssues += checkHtmlFile(fullPath);
    }
  }
  
  return totalIssues;
}

console.log(chalk.blue('🔍 Scanning HTML files for protocol-relative URLs...'));
const totalIssues = scanDir(DIST_DIR);

if (totalIssues > 0) {
  console.log(chalk.red(`❌ Found ${totalIssues} protocol-relative URLs across all HTML files.`));
  process.exit(1); // Exit with error code
} else {
  console.log(chalk.green('✅ No protocol-relative URLs found. All URLs are properly formatted!'));
}
