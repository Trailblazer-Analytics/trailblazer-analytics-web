import rss from 'rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const siteUrl = context.site ? context.site.toString() : "https://trailblazeranalytics.com";
  
  // Ensure we have a clean site URL (no trailing slashes)
  const cleanSite = typeof siteUrl === 'string' ? siteUrl.replace(/\/+$/, '') : "https://trailblazeranalytics.com";
  
  // Create RSS feed with site metadata
  const feed = new rss({
    title: "Trailblazer Analytics",
    description: "Insights, tech notes, and resources for BI professionals.",
    feed_url: `${cleanSite}/rss.xml`,
    site_url: cleanSite,
    language: 'en',
    pubDate: new Date(),
    copyright: `${new Date().getFullYear()} Alexander Nykolaiszyn`,
    webMaster: 'alexander@trailblazer-analytics.com',
    managingEditor: 'alexander@trailblazer-analytics.com',
    categories: ['Business Intelligence', 'Data Analytics', 'Data Science', 'Technology']
  });  
  
  // Get all available content collections
  let allContent = [];
  
  // Function to safely get collection content
  async function safeGetCollection(collectionName, kebabName) {
    try {
      // Try with the original name (usually camelCase)
      return await getCollection(collectionName);
    } catch (error) {
      try {
        // If that fails, try with kebab-case name
        return await getCollection(kebabName);
      } catch (innerError) {
        console.warn(`Collection not available: ${collectionName}/${kebabName}`, error.message);
        return [];
      }
    }
  }
  
  // Get content from available collections
  const blogPosts = await safeGetCollection('blog', 'blog');
  const techNotes = await safeGetCollection('tech-notes', 'tech-notes');
  const caseStudies = await safeGetCollection('case-studies', 'case-studies');
  
  // Combine all content
  allContent = [
    ...blogPosts.map(item => ({ ...item, collectionType: 'blog' })),
    ...techNotes.map(item => ({ ...item, collectionType: 'tech-notes' })),
    ...caseStudies.map(item => ({ ...item, collectionType: 'case-studies' }))
  ];
  
  // Sort content by date (newest first)
  allContent.sort((a, b) => {
    // Handle different date formats with fallbacks
    const getDate = (item) => {
      try {
        return new Date(item.data.date || item.data.pubDate || item.data.publishDate || new Date());
      } catch (e) {
        return new Date();
      }
    };
    
    return getDate(b) - getDate(a);
  });
  
  // Add items to feed
  allContent.forEach((item) => {
    // Determine the URL based on collection type
    let url = '';
    
    switch (item.collectionType) {
      case 'blog':
        url = `${cleanSite}/blog/${item.slug}`;
        break;
      case 'tech-notes':
        url = `${cleanSite}/tech-notes/${item.slug}`;
        break;
      case 'case-studies':
        url = `${cleanSite}/case-studies/${item.slug}`;
        break;
      default:
        // Skip if we don't know how to handle this collection
        return;
    }
    
    // Get publication date with fallback
    let pubDate;
    try {
      pubDate = new Date(item.data.date || item.data.pubDate || item.data.publishDate || new Date());
    } catch (e) {
      pubDate = new Date(); // Fallback to current date if parsing fails
    }
    
    // Get description with fallbacks
    const description = item.data.description || 
                        item.data.summary || 
                        (item.body ? item.body.slice(0, 150) + '...' : 'No description available');
    
    // Get author with fallback
    const author = item.data.author || "Alexander Nykolaiszyn";
    
    // Get categories/tags with fallback
    const categories = item.data.tags || 
                       item.data.categories || 
                       item.data.keywords || 
                       [];
    
    // Add to feed
    feed.item({
      title: item.data.title || 'Untitled',
      description: description,
      url: url,
      guid: url,
      author: author,
      date: pubDate,
      categories: categories,
      custom_elements: [
        {'content:encoded': { _cdata: item.body || '' }},
        ...(item.data.image ? [{'media:content': {
          _attr: {
            url: item.data.image.startsWith('http') ? item.data.image : `${cleanSite}${item.data.image}`,
            medium: 'image'
          }
        }}] : []),
        ...(item.data.audioUrl ? [{'enclosure': {
          _attr: {
            url: item.data.audioUrl.startsWith('http') ? item.data.audioUrl : `${cleanSite}${item.data.audioUrl}`,
            type: 'audio/mpeg',
            length: item.data.audioLength || '0'
          }
        }}] : [])
      ]
    });
  });

  // Return the RSS feed
  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
