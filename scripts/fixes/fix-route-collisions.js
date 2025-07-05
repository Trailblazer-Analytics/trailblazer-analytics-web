// fix-route-collisions.js
// This script helps identify and fix route collision issues in the Trailblazer Analytics project

const fs = require('fs');
const path = require('path');

// Define the pages directory
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

// Function to identify route collisions
function findRouteCollisions() {
  console.log('Checking for route collisions...');
  
  const collisions = [];
  
  // Common route collision patterns
  const collisionPatterns = [
    {
      route: '/blog',
      files: [
        path.join(pagesDir, 'blog', 'index.astro'),
        path.join(pagesDir, 'blog.astro')
      ]
    },
    {
      route: '/case-studies',
      files: [
        path.join(pagesDir, 'case-studies', 'index.astro'),
        path.join(pagesDir, 'case-studies.astro')
      ]
    }
  ];
  
  // Check for each collision pattern
  collisionPatterns.forEach(pattern => {
    const existingFiles = pattern.files.filter(file => fs.existsSync(file));
    
    if (existingFiles.length > 1) {
      collisions.push({
        route: pattern.route,
        files: existingFiles
      });
    }
  });
  
  return collisions;
}

// Function to suggest fixes for route collisions
function suggestFixes(collisions) {
  if (collisions.length === 0) {
    console.log('No route collisions found.');
    return;
  }
  
  console.log('\nFound the following route collisions:');
  collisions.forEach(collision => {
    console.log(`\nRoute: ${collision.route}`);
    console.log('Colliding files:');
    collision.files.forEach(file => console.log(` - ${file}`));
    
    console.log('\nRecommended fix:');
    console.log(` - Keep only one file, preferably ${path.join(pagesDir, collision.route.slice(1), 'index.astro')}`);
    console.log(` - To fix automatically, run: node scripts/fix-route-collisions.js --fix ${collision.route}`);
  });
}

// Function to fix a specific route collision
function fixCollision(route) {
  console.log(`Attempting to fix collision for route: ${route}`);
  
  const indexFile = path.join(pagesDir, route.slice(1), 'index.astro');
  const flatFile = path.join(pagesDir, `${route.slice(1)}.astro`);
  
  if (fs.existsSync(indexFile) && fs.existsSync(flatFile)) {
    // Create a backup of the flat file
    const backupFile = path.join(pagesDir, `_${route.slice(1)}.astro.bak`);
    fs.copyFileSync(flatFile, backupFile);
    console.log(`Created backup: ${backupFile}`);
    
    // Remove the flat file
    fs.unlinkSync(flatFile);
    console.log(`Removed file: ${flatFile}`);
    
    console.log(`Fixed collision for route: ${route}`);
    return true;
  } else {
    console.error(`Could not find both files for route: ${route}`);
    return false;
  }
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--fix')) {
    const routeIndex = args.indexOf('--fix') + 1;
    if (routeIndex < args.length) {
      const route = args[routeIndex];
      fixCollision(route);
    } else {
      console.error('No route specified for --fix');
    }
  } else {
    const collisions = findRouteCollisions();
    suggestFixes(collisions);
  }
}

// Run the script
main();
