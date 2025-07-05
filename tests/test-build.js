#!/usr/bin/env node

console.log('Testing build process...');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS);

// Simple test to verify the environment
const { execSync } = require('child_process');

try {
  console.log('Running pre-build...');
  execSync('npm run pre-build', { stdio: 'inherit' });
  
  console.log('Running build...');
  process.env.NODE_ENV = 'production';
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
