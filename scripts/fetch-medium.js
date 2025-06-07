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

    const outPath = path.resolve(__dirname, '../src/data/medium.json');
    await fs.promises.writeFile(outPath, JSON.stringify(articles, null, 2));
    console.log(`Wrote ${articles.length} articles to ${outPath}`);
  } catch (error) {
    console.error('Error fetching Medium RSS feed:', error);
    process.exit(1);
  }
}

fetchMedium();
