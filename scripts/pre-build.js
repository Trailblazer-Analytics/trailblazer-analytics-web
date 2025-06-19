#!/usr/bin/env node

/**
 * HOOK: Pre-build script for enhanced GitHub Actions workflow
 * Add your custom pre-build processing here
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('⚡ Running pre-build processing...');

// HOOK: Validate content structure
function validateContent() {
  console.log('🔍 Validating content structure...');
  
  const contentDir = path.join(__dirname, '..', 'src', 'content');
  
  // Check blog directory
  const blogDir = path.join(contentDir, 'blog');
  if (fs.existsSync(blogDir)) {
    const posts = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    console.log(`✅ Found ${posts.length} blog posts`);
    
    // HOOK: Validate frontmatter in each post
    posts.forEach(post => {
      const postPath = path.join(blogDir, post);
      const content = fs.readFileSync(postPath, 'utf-8');
      
      // Basic frontmatter validation
      if (!content.startsWith('---')) {
        console.warn(`⚠️ ${post} is missing frontmatter`);
      } else {
        console.log(`  ✓ ${post}`);
      }
    });
  } else {
    console.log('⚠️ Blog directory not found');
  }
}

// HOOK: Generate build metadata
function generateBuildMetadata() {
  console.log('📊 Generating build metadata...');
  
  const metadata = {
    buildTime: new Date().toISOString(),
    buildId: Math.random().toString(36).substring(7),
    // HOOK: Add more metadata as needed
    nodeVersion: process.version,
    platform: process.platform,
  };
  
  const metadataPath = path.join(__dirname, '..', 'build-metadata.json');
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  
  console.log(`✅ Build metadata saved with ID: ${metadata.buildId}`);
}

// HOOK: Optimize images (placeholder - add your image optimization logic)
function optimizeImages() {
  console.log('🖼️ Checking images...');
  
  const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
  if (fs.existsSync(publicImagesDir)) {
    const images = fs.readdirSync(publicImagesDir).filter(f => 
      f.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp)$/)
    );
    console.log(`📸 Found ${images.length} images in public/images`);
    
    // HOOK: Add image optimization logic here
    // Examples: resize, compress, convert to WebP, generate responsive variants
  } else {
    console.log('ℹ️ No public/images directory found');
  }
}

// HOOK: Check for TODO/FIXME comments in content
function checkTodos() {
  console.log('🔍 Checking for development comments...');
  
  const contentDir = path.join(__dirname, '..', 'src', 'content');
  
  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return [];
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    const todos = [];
    
    files.forEach(file => {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        todos.push(...scanDirectory(fullPath));
      } else if (file.name.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          if (line.includes('TODO') || line.includes('FIXME') || line.includes('HACK')) {
            todos.push({
              file: path.relative(process.cwd(), fullPath),
              line: index + 1,
              content: line.trim()
            });
          }
        });
      }
    });
    
    return todos;
  }
  
  const todos = scanDirectory(contentDir);
  
  if (todos.length > 0) {
    console.warn(`⚠️ Found ${todos.length} development comments in content:`);
    todos.forEach(todo => {
      console.warn(`  ${todo.file}:${todo.line} - ${todo.content}`);
    });
  } else {
    console.log('✅ No development comments found in content');
  }
}

// HOOK: Generate RSS feed preview (if not handled by Astro)
function generateRSSPreview() {
  console.log('📡 Checking RSS feed configuration...');
  
  const rssPath = path.join(__dirname, '..', 'src', 'pages', 'rss.xml.js');
  if (fs.existsSync(rssPath)) {
    console.log('✅ RSS feed generator found');
  } else {
    console.warn('⚠️ RSS feed generator not found - consider adding one');
  }
}

// HOOK: Main execution
async function runPreBuild() {
  console.log('🚀 Starting pre-build tasks...');
  
  try {
    validateContent();
    generateBuildMetadata();
    optimizeImages();
    checkTodos();
    generateRSSPreview();
    
    console.log('✅ Pre-build tasks completed successfully!');
    
    // HOOK: Add success metrics
    const endTime = Date.now();
    console.log(`⏱️ Pre-build completed in ${Date.now() - startTime}ms`);
    
  } catch (error) {
    console.error('❌ Pre-build failed:', error.message);
    process.exit(1);
  }
}

const startTime = Date.now();
runPreBuild();
