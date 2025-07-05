// API endpoint for search functionality
import siteConfig from '../../site.config.js';

// Helper function to normalize text for search
function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export async function GET({ request }) {
  try {
    // Get query from URL
    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    
    if (!query || query.length < 2) {
      return new Response(
        JSON.stringify({
          results: [],
          count: 0,
          message: 'Query must be at least 2 characters'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': siteConfig.corsOrigins.join(',')
          }
        }
      );
    }
    
    const normalizedQuery = normalize(query);
    
    // Import all content collections
    const blogPosts = await import.meta.glob('../../content/blog/*.{md,mdx}', { eager: true });
    const techNotes = await import.meta.glob('../../content/techNotes/*.{md,mdx}', { eager: true });
    const whitepapers = await import.meta.glob('../../content/whitepapers/*.{md,mdx}', { eager: true });
    const downloads = await import.meta.glob('../../content/downloads/*.{md,mdx}', { eager: true });
    const caseStudies = await import.meta.glob('../../content/caseStudies/*.{md,mdx}', { eager: true });
    const tools = await import.meta.glob('../../content/tools/*.{md,mdx}', { eager: true });
    
    // Array to hold all content
    const allContent = [];
    
    // Process blog posts
    Object.keys(blogPosts).forEach((path) => {
      const post = blogPosts[path];
      const slug = path.split('/').pop().replace(/\.(md|mdx)$/, '');
      
      if (post.frontmatter) {
        allContent.push({
          title: post.frontmatter.title,
          description: post.frontmatter.description || '',
          slug: `/blog/${slug}`,
          type: 'Blog Post',
          date: post.frontmatter.date || null,
          keywords: post.frontmatter.keywords || [],
          content: post.rawContent ? post.rawContent() : ''
        });
      }
    });
    
    // Process tech notes
    Object.keys(techNotes).forEach((path) => {
      const note = techNotes[path];
      const slug = path.split('/').pop().replace(/\.(md|mdx)$/, '');
      
      if (note.frontmatter) {
        allContent.push({
          title: note.frontmatter.title,
          description: note.frontmatter.description || '',
          slug: `/tech-notes/${slug}`,
          type: 'Tech Note',
          date: note.frontmatter.date || null,
          keywords: note.frontmatter.keywords || [],
          content: note.rawContent ? note.rawContent() : ''
        });
      }
    });
    
    // Process whitepapers
    Object.keys(whitepapers).forEach((path) => {
      const whitepaper = whitepapers[path];
      const slug = path.split('/').pop().replace(/\.(md|mdx)$/, '');
      
      if (whitepaper.frontmatter) {
        allContent.push({
          title: whitepaper.frontmatter.title,
          description: whitepaper.frontmatter.description || '',
          slug: `/white-papers/${slug}`,
          type: 'White Paper',
          date: whitepaper.frontmatter.date || null,
          keywords: whitepaper.frontmatter.keywords || [],
          content: whitepaper.rawContent ? whitepaper.rawContent() : ''
        });
      }
    });
    
    // Process downloads
    Object.keys(downloads).forEach((path) => {
      const download = downloads[path];
      const slug = path.split('/').pop().replace(/\.(md|mdx)$/, '');
      
      if (download.frontmatter) {
        allContent.push({
          title: download.frontmatter.title,
          description: download.frontmatter.description || '',
          slug: `/downloads/${slug}`,
          type: 'Download',
          date: download.frontmatter.date || null,
          keywords: download.frontmatter.keywords || [],
          content: download.rawContent ? download.rawContent() : ''
        });
      }
    });
    
    // Process case studies
    Object.keys(caseStudies).forEach((path) => {
      const caseStudy = caseStudies[path];
      const slug = path.split('/').pop().replace(/\.(md|mdx)$/, '');
      
      if (caseStudy.frontmatter) {
        allContent.push({
          title: caseStudy.frontmatter.title,
          description: caseStudy.frontmatter.description || '',
          slug: `/case-studies/${slug}`,
          type: 'Case Study',
          date: caseStudy.frontmatter.date || null,
          keywords: caseStudy.frontmatter.keywords || [],
          content: caseStudy.rawContent ? caseStudy.rawContent() : ''
        });
      }
    });
    
    // Process tools
    Object.keys(tools).forEach((path) => {
      const tool = tools[path];
      const slug = path.split('/').pop().replace(/\.(md|mdx)$/, '');
      
      if (tool.frontmatter) {
        allContent.push({
          title: tool.frontmatter.title,
          description: tool.frontmatter.description || '',
          slug: `/tools/${slug}`,
          type: 'Tool',
          date: tool.frontmatter.date || null,
          keywords: tool.frontmatter.keywords || [],
          content: tool.rawContent ? tool.rawContent() : ''
        });
      }
    });
    
    // Filter content based on search query
    const results = allContent.filter(item => {
      const normalizedTitle = normalize(item.title);
      const normalizedDescription = normalize(item.description);
      const normalizedKeywords = item.keywords.map(k => normalize(k)).join(' ');
      const normalizedContent = item.content ? normalize(item.content) : '';
      
      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery) ||
        normalizedKeywords.includes(normalizedQuery) ||
        normalizedContent.includes(normalizedQuery)
      );
    }).map(item => {
      // Remove content from results to reduce payload size
      const { content, ...rest } = item;
      return rest;
    });
    
    // Sort results by relevance (title matches first, then description, then content)
    results.sort((a, b) => {
      const aTitleMatch = normalize(a.title).includes(normalizedQuery) ? 1 : 0;
      const bTitleMatch = normalize(b.title).includes(normalizedQuery) ? 1 : 0;
      
      if (aTitleMatch !== bTitleMatch) {
        return bTitleMatch - aTitleMatch;
      }
      
      const aDescMatch = normalize(a.description).includes(normalizedQuery) ? 1 : 0;
      const bDescMatch = normalize(b.description).includes(normalizedQuery) ? 1 : 0;
      
      if (aDescMatch !== bDescMatch) {
        return bDescMatch - aDescMatch;
      }
      
      // If same relevance, sort by date (newest first)
      if (a.date && b.date) {
        return new Date(b.date) - new Date(a.date);
      }
      
      return 0;
    });
    
    return new Response(
      JSON.stringify({
        results: results.slice(0, 50), // Limit to 50 results
        count: results.length,
        query
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': siteConfig.corsOrigins.join(',')
        }
      }
    );
  } catch (error) {
    console.error('Search API error:', error);
    
    return new Response(
      JSON.stringify({
        results: [],
        count: 0,
        error: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': siteConfig.corsOrigins.join(',')
        }
      }
    );
  }
}
