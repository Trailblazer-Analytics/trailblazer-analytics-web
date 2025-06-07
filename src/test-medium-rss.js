// A simple test script to check the Medium RSS feed integration
const Parser = require('rss-parser');

const MEDIUM_USERNAME = 'alex.nykolaiszyn';
const MEDIUM_RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

async function testMediumRss() {
  try {
    console.log(`Fetching Medium RSS feed for @${MEDIUM_USERNAME}...`);
    const parser = new Parser();
    const feed = await parser.parseURL(MEDIUM_RSS_URL);
    
    console.log('Feed title:', feed.title);
    console.log('Feed description:', feed.description);
    console.log(`Found ${feed.items.length} articles.`);
    
    // Print details of the first article if available
    if (feed.items.length > 0) {
      const firstItem = feed.items[0];
      console.log('\nFirst article:');
      console.log('Title:', firstItem.title);
      console.log('Link:', firstItem.link);
      console.log('Date:', new Date(firstItem.pubDate).toLocaleDateString());
      
      // Check if content exists and print a preview
      if (firstItem.content) {
        console.log('Content preview:', firstItem.content.substring(0, 100) + '...');
      } else if (firstItem['content:encoded']) {
        console.log('Content preview:', firstItem['content:encoded'].substring(0, 100) + '...');
      }
    }
  } catch (error) {
    console.error('Error fetching Medium RSS feed:', error);
  }
}

testMediumRss();
