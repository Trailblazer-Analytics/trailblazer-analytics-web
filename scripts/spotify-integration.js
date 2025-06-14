// Spotify Podcast RSS Integration Script
// This script fetches podcast episodes from Spotify RSS feed

/**
 * Fetch podcast episodes from Spotify RSS feed
 * Spotify doesn't provide direct RSS feeds, but we can use alternative methods:
 * 1. Spotify Web API (requires authentication)
 * 2. Third-party services that convert Spotify to RSS
 * 3. Manual RSS feed creation
 */

const SPOTIFY_SHOW_ID = '7r1DNHAYJr4Xme88DvMBuX'; // From site config

/**
 * Option 1: Use Spotify Web API to fetch episodes
 * Note: Requires client credentials authentication
 */
async function fetchSpotifyEpisodes() {
  try {
    // For production, you'd need to implement OAuth flow
    // This is a placeholder for the structure
    
    // Alternative: Use a service like Podscribe or similar RSS converters
    // Example: https://podscribe.ai/feeds/spotify/7r1DNHAYJr4Xme88DvMBuX
    
    const rssProxyUrl = `https://podscribe.ai/feeds/spotify/${SPOTIFY_SHOW_ID}`;
    
    // Try to fetch from RSS converter service
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssProxyUrl)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.items.map(item => {
      // Clean description
      const cleanDescription = item.description
        .replace(/<[^>]*>/g, '')
        .replace(/&[^;]+;/g, '')
        .substring(0, 200) + '...';
      
      return {
        id: item.guid || data.items.indexOf(item) + 1,
        title: item.title,
        description: cleanDescription,
        date: item.pubDate,
        duration: extractDuration(item.content || item.description),
        spotifyUrl: item.link,
        guest: extractGuest(item.title),
        topics: extractTopics(item.content || item.description)
      };
    });
    
  } catch (error) {
    console.error('Error fetching Spotify episodes:', error);
    
    // Return placeholder episodes
    return [
      {
        id: 1,
        title: "The Future of Business Intelligence with AI Integration",
        description: "Exploring how artificial intelligence is transforming traditional BI workflows and what it means for data professionals in 2025.",
        date: "2024-12-15T10:00:00Z",
        duration: "42:30",
        spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
        guest: "Dr. Sarah Chen",
        topics: ["AI", "Business Intelligence", "Future Trends", "Data Strategy"]
      },
      {
        id: 2,
        title: "Building Data-Driven Culture: Lessons from Fortune 500",
        description: "A deep dive into how large organizations successfully implement data-driven decision making across all business units.",
        date: "2024-12-01T10:00:00Z",
        duration: "38:45",
        spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
        guest: "Michael Rodriguez",
        topics: ["Culture Change", "Data Strategy", "Leadership", "Enterprise Analytics"]
      },
      {
        id: 3,
        title: "Modern Data Stack: Tools and Technologies for 2025",
        description: "Comparing the latest data engineering tools, cloud platforms, and analytics technologies that are shaping the modern data landscape.",
        date: "2024-11-15T10:00:00Z",
        duration: "45:12",
        spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
        guest: "Alex Thompson",
        topics: ["Data Engineering", "Cloud Platforms", "Technology Stack", "Tools"]
      }
    ];
  }
}

/**
 * Extract duration from episode content
 */
function extractDuration(content) {
  const durationMatch = content.match(/(\d+:\d+)/);
  return durationMatch ? durationMatch[1] : "30:00";
}

/**
 * Extract guest name from episode title
 */
function extractGuest(title) {
  const guestMatch = title.match(/with (.+)$/i);
  return guestMatch ? guestMatch[1] : "Industry Expert";
}

/**
 * Extract topics from content
 */
function extractTopics(content) {
  const defaultTopics = ["Data Analytics", "Business Intelligence"];
  
  const topicKeywords = {
    "AI": ["artificial intelligence", "machine learning", "ai"],
    "Strategy": ["strategy", "planning", "roadmap"],
    "Technology": ["technology", "tools", "platform"],
    "Leadership": ["leadership", "management", "culture"],
    "Analytics": ["analytics", "analysis", "insights"]
  };
  
  const foundTopics = [];
  const lowerContent = content.toLowerCase();
  
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    if (keywords.some(keyword => lowerContent.includes(keyword))) {
      foundTopics.push(topic);
    }
  }
  
  return foundTopics.length > 0 ? foundTopics : defaultTopics;
}

/**
 * Alternative: Manual episode management
 * Use this if RSS/API integration is not available
 */
export function getManualEpisodes() {
  return [
    {
      id: 1,
      title: "Morning Metrics: Getting Started with Business Intelligence",
      description: "An introduction to the Morning Metrics podcast and essential BI concepts every professional should know.",
      date: "2024-12-01T08:00:00Z",
      duration: "25:30",
      spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
      guest: "Alexander Nykolaiszyn",
      topics: ["Introduction", "Business Intelligence", "Getting Started"]
    }
  ];
}

export { fetchSpotifyEpisodes, SPOTIFY_SHOW_ID };
