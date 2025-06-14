// Medium RSS Feed Integration Script
// This script can fetch articles from your Medium RSS feed

const MEDIUM_RSS_URL = 'https://medium.com/feed/@alex.nykolaiszyn';

/**
 * Fetch articles from Medium RSS feed
 * Note: This requires a CORS proxy or server-side implementation
 * due to Medium's CORS restrictions
 */
async function fetchMediumArticles() {
  try {
    // Option 1: Use a CORS proxy service
    const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    const response = await fetch(`${proxyUrl}${encodeURIComponent(MEDIUM_RSS_URL)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.items.map(item => ({
      title: item.title,
      abstract: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      mediumUrl: item.link,
      publishDate: item.pubDate,
      readTime: calculateReadTime(item.content),
      tags: item.categories || []
    }));
    
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}

/**
 * Calculate estimated read time
 */
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min`;
}

/**
 * Update the articles page with real Medium data
 * Call this from your build process or page component
 */
export async function getMediumArticles() {
  const articles = await fetchMediumArticles();
  return articles.slice(0, 6); // Limit to 6 most recent
}

// For Astro integration, you can use this in your page frontmatter:
/*
---
import { getMediumArticles } from '../scripts/medium-integration.js';

// Fetch articles at build time
const articles = await getMediumArticles().catch(() => [
  // Fallback to placeholder articles if fetch fails
]);
---
*/
