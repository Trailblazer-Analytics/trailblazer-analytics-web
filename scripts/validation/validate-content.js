#!/usr/bin/env node

/**
 * HOOK: Content validation and auto-fix script
 * Helps identify and resolve content schema issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validating blog content...');

const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');

// HOOK: Schema validation helpers
function validateFrontmatter(content, filename) {
  const issues = [];
  
  // Extract frontmatter - handle both --- and --\n patterns
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) {
    // Try alternative pattern
    const altMatch = content.match(/^---\r?\n([\s\S]*?)---/);
    if (!altMatch) {
      issues.push('Missing or malformed frontmatter');
      return issues;
    }
  }
  
  const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
  
  // Check for readingTime format
  const readingTimeMatch = frontmatter.match(/readingTime:\s*(.+)/);
  if (readingTimeMatch) {
    const value = readingTimeMatch[1].trim();
    // If it's a quoted string but should be a number
    if (value.match(/^"\d+\s*(minutes?|mins?)"$/)) {
      issues.push(`readingTime should be a number, found: ${value}`);
    }
  }
  
  // Check for required fields
  if (!frontmatter.includes('title:')) {
    issues.push('Missing title field');
  }
  
  // Check for date fields
  const hasDate = frontmatter.includes('date:');
  const hasPublishDate = frontmatter.includes('publishDate:');
  if (!hasDate && !hasPublishDate) {
    issues.push('Missing date or publishDate field');
  }
  
  return issues;
}

// HOOK: Auto-fix common issues
function fixContent(content, filename) {
  let fixed = content;
  let changes = [];
  
  // Fix readingTime format: "8 minutes" -> 8 (handle different line endings)
  fixed = fixed.replace(/readingTime:\s*"(\d+)\s*(minutes?|mins?)"/g, (match, num) => {
    changes.push(`Fixed readingTime format: "${num} minutes" -> ${num}`);
    return `readingTime: ${num}`;
  });
  
  // HOOK: Add more auto-fixes here as needed
  
  return { content: fixed, changes };
}

// HOOK: Main validation function
function validateBlogContent() {
  if (!fs.existsSync(blogDir)) {
    console.log('⚠️ Blog directory not found');
    return;
  }
  
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  console.log(`📄 Found ${files.length} blog files to validate`);
  
  let totalIssues = 0;
  let fixedFiles = 0;
  
  files.forEach(filename => {
    const filepath = path.join(blogDir, filename);
    const content = fs.readFileSync(filepath, 'utf-8');
    
    console.log(`\n📝 Checking: ${filename}`);
    
    // Validate current content
    const issues = validateFrontmatter(content, filename);
    
    if (issues.length > 0) {
      console.log(`  ⚠️ Found ${issues.length} issues:`);
      issues.forEach(issue => console.log(`    - ${issue}`));
      totalIssues += issues.length;
      
      // Try to auto-fix
      const { content: fixedContent, changes } = fixContent(content, filename);
      
      if (changes.length > 0) {
        // Write the fixed content back
        fs.writeFileSync(filepath, fixedContent);
        fixedFiles++;
        
        console.log(`  ✅ Auto-fixed ${changes.length} issues:`);
        changes.forEach(change => console.log(`    - ${change}`));
      }
    } else {
      console.log(`  ✅ No issues found`);
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  Files checked: ${files.length}`);
  console.log(`  Issues found: ${totalIssues}`);
  console.log(`  Files auto-fixed: ${fixedFiles}`);
  
  if (totalIssues === 0) {
    console.log('🎉 All blog content is valid!');
  } else if (fixedFiles > 0) {
    console.log('🔧 Some issues were auto-fixed. Please review the changes.');
  }
}

// HOOK: Run validation
validateBlogContent();
