#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Parser from 'rss-parser';
import siteConfig from '../src/site.config.js';

// Derive __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchMedium() {
  const outPath = path.resolve(__dirname, '../src/data/medium.json');
  
  try {
    console.log(`Fetching Medium RSS feed for @${siteConfig.mediumUsername}`);
    const parser = new Parser();
    const feed = await parser.parseURL(`https://medium.com/feed/@${siteConfig.mediumUsername}`);

    const articles = feed.items.map(item => {
      const excerptSource = item.content || item['content:encoded'] || '';
      const excerptText = excerptSource.replace(/<[^>]*>/g, '');
      const excerpt = excerptText.trim().slice(0, 150) + (excerptText.length > 150 ? '...' : '');
      return {
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        categories: item.categories || [],
        excerpt
      };
    });

    await fs.promises.writeFile(outPath, JSON.stringify(articles, null, 2));
    console.log(`✅ Successfully fetched and wrote ${articles.length} articles to ${outPath}`);
  } catch (error) {
    console.error('⚠️  Error fetching Medium RSS feed:', error.message);
    
    // Check if we have cached data to fall back to
    try {
      const existingData = await fs.promises.readFile(outPath, 'utf8');
      const cachedArticles = JSON.parse(existingData);
      console.log(`📋 Using cached data with ${cachedArticles.length} articles`);
      console.log('🏗️  Build will continue with existing Medium data');
    } catch (cacheError) {
      // If no cached data exists, create empty array to prevent build failure
      console.log('⚠️  No cached data found, creating empty Medium data file');
      await fs.promises.writeFile(outPath, JSON.stringify([], null, 2));
      console.log('🏗️  Build will continue with empty Medium data');
    }
    
    // Don't exit with error - let the build continue
    console.log('✅ Medium fetch completed (using fallback data)');
  }
}

fetchMedium();
