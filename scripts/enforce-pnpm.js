#!/usr/bin/env node

/**
 * Package Manager Enforcement Script
 * Ensures developers use pnpm instead of npm/yarn
 * 
 * Add this to package.json scripts:
 * "preinstall": "node scripts/enforce-pnpm.js"
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGE_MANAGER = 'pnpm';
const LOCK_FILE = 'pnpm-lock.yaml';

function main() {
  // Check if we're in CI (allow npm in CI for compatibility)
  if (process.env.CI || process.env.GITHUB_ACTIONS) {
    console.log('🚀 CI environment detected, skipping package manager check');
    return;
  }

  // Check current package manager
  const userAgent = process.env.npm_execpath || '';
  
  if (userAgent.includes('pnpm')) {
    console.log('✅ Using pnpm - excellent choice!');
    return;
  }

  if (userAgent.includes('npm')) {
    console.error(`
❌ Please use pnpm instead of npm!

This project uses pnpm for better performance and consistency.

Quick setup:
  npm install -g pnpm
  pnpm install

Why pnpm?
  ⚡ 2x faster installations
  💾 Efficient disk usage
  🔒 Strict dependency resolution
  🚀 Better CI/CD performance

See PACKAGE_MANAGER_STANDARDIZATION.md for more details.
`);
    process.exit(1);
  }

  if (userAgent.includes('yarn')) {
    console.error(`
❌ Please use pnpm instead of yarn!

This project standardizes on pnpm. Please run:
  npm install -g pnpm
  pnpm install
`);
    process.exit(1);
  }

  // Check for wrong lock files
  const npmLock = path.join(process.cwd(), 'package-lock.json');
  const yarnLock = path.join(process.cwd(), 'yarn.lock');
  
  if (fs.existsSync(npmLock)) {
    console.warn('⚠️  Found package-lock.json - this should be removed. Use pnpm-lock.yaml instead.');
  }
  
  if (fs.existsSync(yarnLock)) {
    console.warn('⚠️  Found yarn.lock - this should be removed. Use pnpm-lock.yaml instead.');
  }

  console.log('ℹ️  Package manager check completed');
}

// ES module equivalent of require.main === module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };
