// verify-rss.js
// This script verifies the RSS feed and its content for the Trailblazer Analytics site

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if the RSS module is installed
try {
  await import('rss');
  console.log('✓ RSS package is installed');
} catch (error) {
  console.error('✗ RSS package is not installed. Run: pnpm add rss');
  process.exit(1);
}

// Try to install fast-xml-parser if not already available
let XMLParser;
try {
  const xmlModule = await import('fast-xml-parser');
  XMLParser = xmlModule.XMLParser;
  console.log('✓ fast-xml-parser is available');
} catch (error) {
  console.log('Installing fast-xml-parser for RSS validation...');
  execSync('pnpm add -D fast-xml-parser');
  const xmlModule = await import('fast-xml-parser');
  XMLParser = xmlModule.XMLParser;
  console.log('✓ Installed fast-xml-parser');
}

// Check if the RSS implementation file exists
const rssFilePath = path.join(__dirname, '..', 'src', 'pages', 'rss.xml.js');
if (fs.existsSync(rssFilePath)) {
  console.log('✓ RSS implementation file exists: src/pages/rss.xml.js');
} else {
  console.error('✗ RSS implementation file is missing!');
  process.exit(1);
}

// Check if the site is built and the RSS feed exists
const distRssPath = path.join(__dirname, '..', 'dist', 'rss.xml');
if (fs.existsSync(distRssPath)) {
  console.log('✓ Built RSS feed exists: dist/rss.xml');
  
  // Validate the RSS feed
  const rssContent = fs.readFileSync(distRssPath, 'utf8');
  
  // Check basic structure
  if (rssContent.includes('<rss') && rssContent.includes('</rss>')) {
    console.log('✓ RSS feed has valid opening and closing tags');
  } else {
    console.error('✗ RSS feed is missing proper tags');
  }
  
  // Check for required elements
  const requiredElements = [
    '<title>', '<description>', '<link>', '<item>', 
    'application/rss+xml', '<pubDate>', '<lastBuildDate>'
  ];
  
  const missingElements = requiredElements.filter(element => !rssContent.includes(element));
  
  if (missingElements.length === 0) {
    console.log('✓ RSS feed contains all required elements');
  } else {
    console.error('✗ RSS feed is missing required elements:', missingElements.join(', '));
  }
  
  // Parse the XML to check for structural validity
  try {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_"
    });
    
    const parsedXml = parser.parse(rssContent);
    
    if (parsedXml.rss && parsedXml.rss.channel) {
      console.log('✓ RSS feed has valid XML structure');
      
      // Check for items
      const items = parsedXml.rss.channel.item;
      const itemCount = Array.isArray(items) ? items.length : (items ? 1 : 0);
      
      console.log(`✓ RSS feed contains ${itemCount} items`);
      
      if (itemCount > 0) {
        // Sample the first few items
        const sampleCount = Math.min(3, itemCount);
        const sampleItems = Array.isArray(items) ? items.slice(0, sampleCount) : [items];
        
        console.log('\nSample RSS items:');
        sampleItems.forEach((item, index) => {
          console.log(`\nItem #${index + 1}:`);
          console.log(`  Title: ${item.title}`);
          console.log(`  Link: ${item.link}`);
          console.log(`  Publication Date: ${item.pubDate}`);
          
          // Check for required fields
          const requiredItemFields = ['title', 'link', 'description', 'pubDate'];
          const missingFields = requiredItemFields.filter(field => !item[field]);
          
          if (missingFields.length === 0) {
            console.log('  ✓ Item has all required fields');
          } else {
            console.log(`  ✗ Item is missing fields: ${missingFields.join(', ')}`);
          }
        });
      }
    } else {
      console.error('✗ RSS feed has invalid structure');
    }
  } catch (error) {
    console.error('✗ Failed to parse RSS XML:', error.message);
  }
} else {
  console.warn('⚠ Built RSS feed not found at dist/rss.xml');
  console.log('  Run "pnpm run build" to generate the RSS feed');
}

// Check if RSS link is in the base layout
const baseLayoutPath = path.join(__dirname, '..', 'src', 'layouts', 'Base.astro');
if (fs.existsSync(baseLayoutPath)) {
  const baseLayoutContent = fs.readFileSync(baseLayoutPath, 'utf8');
  
  if (baseLayoutContent.includes('application/rss+xml') && baseLayoutContent.includes('/rss.xml')) {
    console.log('✓ RSS link is properly included in Base.astro layout');
  } else {
    console.warn('⚠ RSS link may be missing from Base.astro layout');
  }
} else {
  console.warn('⚠ Base.astro layout not found');
}

console.log('\nRSS feed verification complete!');
console.log('For a more thorough validation, submit your RSS feed to:');
console.log('https://validator.w3.org/feed/');
