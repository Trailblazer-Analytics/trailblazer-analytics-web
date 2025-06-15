#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '..', 'docs');

// Files to remove (empty or redundant)
const FILES_TO_REMOVE = [
  'ADMIN_GUIDE_FIXED.md',
  'PROJECT_COMPLETE_FIXED.md',
  'CONSOLIDATION_COMPLETE.md',
  'CURRENT_STATUS_SUMMARY.md',
  'FINAL_STATUS.md',
  'DEPLOYMENT_SUCCESS.md',
  'DEPLOYMENT_TEST_STATUS.md',
  'CURRENT_DEPLOYMENT_STATUS.md'
];

// Files that should be kept but may need cleanup
const CORE_FILES = [
  'README.md',
  'PROJECT_COMPLETE.md',
  'TODO.md',
  'BUILD_WARNINGS.md',
  'RSS_FEED_IMPLEMENTATION.md',
  'ADMIN_GUIDE.md',
  'BLOG_POST_GUIDE.md',
  'CASE_STUDY_GUIDE.md',
  'CONTENT_MANAGEMENT_GUIDE.md',
  'CONTENT_WORKFLOW.md',
  'DEPLOYMENT_CHECKLIST.md',
  'DEV_SETUP.md',
  'FEATURES_SUMMARY.md',
  'GITHUB_PAGES_DEPLOYMENT.md',
  'LIGHTHOUSE_CI_GUIDE.md',
  'SEO_PERFORMANCE_SUMMARY.md',
  'SITE_DASHBOARD.md'
];

function cleanupDocs() {
  console.log('🧹 Starting documentation consolidation...\n');

  // Remove empty/redundant files
  console.log('📋 Removing empty and redundant files:');
  FILES_TO_REMOVE.forEach(filename => {
    const filepath = path.join(DOCS_DIR, filename);
    if (fs.existsSync(filepath)) {
      try {
        fs.unlinkSync(filepath);
        console.log(`  ❌ Removed: ${filename}`);
      } catch (error) {
        console.log(`  ⚠️  Failed to remove ${filename}: ${error.message}`);
      }
    } else {
      console.log(`  ℹ️  Not found: ${filename}`);
    }
  });

  console.log('\n✅ Core documentation files remaining:');
  CORE_FILES.forEach(filename => {
    const filepath = path.join(DOCS_DIR, filename);
    if (fs.existsSync(filepath)) {
      const stats = fs.statSync(filepath);
      const size = stats.size > 0 ? `(${Math.round(stats.size / 1024)}KB)` : '(empty)';
      console.log(`  📄 ${filename} ${size}`);
    } else {
      console.log(`  ⚠️  Missing: ${filename}`);
    }
  });

  // Check for any remaining files not in our core list
  const allFiles = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.md'));
  const extraFiles = allFiles.filter(f => !CORE_FILES.includes(f) && !FILES_TO_REMOVE.includes(f));
  
  if (extraFiles.length > 0) {
    console.log('\n🔍 Additional files found:');
    extraFiles.forEach(filename => {
      console.log(`  📄 ${filename}`);
    });
  }

  console.log('\n✅ Documentation consolidation complete!');
}

cleanupDocs();
