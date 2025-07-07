#!/usr/bin/env node

/**
 * Medium RSS Feed Integration Script
 * Fetches articles from Medium RSS feed and creates/updates article files
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MEDIUM_RSS_URL = 'https://medium.com/feed/@alex.nykolaiszyn';
const ARTICLES_DIR = path.join(__dirname, '..', 'src', 'content', 'articles');

/**
 * Fetch articles from Medium RSS feed
 */
async function fetchMediumArticles() {
  try {
    console.log('🔄 Fetching Medium articles...');
    
    // Use rss2json API to convert RSS to JSON (handles CORS)
    const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    const response = await fetch(`${proxyUrl}${encodeURIComponent(MEDIUM_RSS_URL)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(`RSS API error: ${data.message}`);
    }
    
    console.log(`✅ Found ${data.items?.length || 0} articles`);
    
    return data.items.map((item, index) => ({
      title: item.title,
      date: item.pubDate,
      description: cleanHtml(item.description).substring(0, 200) + '...',
      tags: item.categories || ['Analytics', 'Data Strategy'],
      featured: index < 2, // Mark first 2 as featured
      image: extractImage(item.content) || '/images/default-article-image.jpg',
      mediumUrl: item.link,
      readingTime: calculateReadTime(item.content),
      author: item.author || 'Alexander Nykolaiszyn',
      published: true,
      content: cleanHtml(item.content)
    }));
    
  } catch (error) {
    console.error('❌ Error fetching Medium articles:', error.message);
    return [];
  }
}

/**
 * Clean HTML content
 */
function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

/**
 * Extract first image from content
 */
function extractImage(content) {
  if (!content) return null;
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

/**
 * Calculate estimated read time
 */
function calculateReadTime(content) {
  if (!content) return '5 min read';
  const wordsPerMinute = 200;
  const wordCount = cleanHtml(content).split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

/**
 * Generate slug from title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Create article file
 */
async function createArticleFile(article) {
  const slug = generateSlug(article.title);
  const filename = `${slug}.mdx`;
  const filepath = path.join(ARTICLES_DIR, filename);
  
  // Check if file already exists and decide whether to update
  let fileExists = false;
  try {
    await fs.access(filepath);
    fileExists = true;
    console.log(`🔄 Article "${article.title}" exists, updating with latest data...`);
  } catch (error) {
    // File doesn't exist, will create it
    console.log(`📝 Creating new article: "${article.title}"`);
  }
  
  const frontmatter = `---
title: "${article.title.replace(/"/g, '\\"')}"
date: "${article.date}"
description: "${article.description.replace(/"/g, '\\"')}"
tags: ${JSON.stringify(article.tags)}
featured: ${article.featured}
image: "${article.image}"
mediumUrl: "${article.mediumUrl}"
readingTime: "${article.readingTime}"
author: "${article.author}"
published: ${article.published}
---

# ${article.title}

*This article was originally published on [Medium](${article.mediumUrl}). Click the link to read the full article with all formatting, images, and interactive elements.*

## Summary

${article.description}

${article.content.split('\n').slice(0, 10).join('\n')}

[Continue reading on Medium →](${article.mediumUrl})

---

*For more insights on analytics and data strategy, [follow me on Medium](https://medium.com/@alex.nykolaiszyn) or [connect on LinkedIn](https://linkedin.com/in/alexandernykolaiszyn).*
`;

  try {
    await fs.writeFile(filepath, frontmatter, 'utf8');
    if (fileExists) {
      console.log(`✅ Updated article: ${filename}`);
    } else {
      console.log(`✅ Created article: ${filename}`);
    }
  } catch (error) {
    console.error(`❌ Error writing article ${filename}:`, error.message);
  }
}

/**
 * Ensure articles directory exists
 */
async function ensureArticlesDir() {
  try {
    await fs.mkdir(ARTICLES_DIR, { recursive: true });
  } catch (error) {
    console.error('❌ Error creating articles directory:', error.message);
    process.exit(1);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting Medium integration...');
  
  await ensureArticlesDir();
  
  const articles = await fetchMediumArticles();
  
  if (articles.length === 0) {
    console.log('⚠️  No articles found or fetched. Using existing sample articles.');
    return;
  }
  
  console.log(`📝 Processing ${articles.length} articles...`);
  
  for (const article of articles) {
    await createArticleFile(article);
  }
  
  console.log('✨ Medium integration complete!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

export { fetchMediumArticles, main as runMediumIntegration };
