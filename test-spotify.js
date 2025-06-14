// Quick test to check if the Spotify show exists
const SPOTIFY_SHOW_ID = '7r1DNHAYJr4Xme88DvMBuX';

async function testSpotifyShow() {
  try {
    console.log(`Testing Spotify show: ${SPOTIFY_SHOW_ID}`);
    console.log(`URL: https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`);
    
    // Test if we can fetch basic info about the show
    const testUrl = `https://open.spotify.com/oembed?url=https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`;
    
    const response = await fetch(testUrl);
    if (response.ok) {
      const data = await response.json();
      console.log('Spotify show exists!');
      console.log('Title:', data.title);
      console.log('Author:', data.author_name);
    } else {
      console.log('Could not verify show existence via oEmbed');
    }
    
    // Test RSS conversion services
    console.log('\nTesting RSS conversion services...');
    
    // Test RSS2JSON with Podscribe
    const rssUrl = `https://podscribe.ai/feeds/spotify/${SPOTIFY_SHOW_ID}`;
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    console.log('Testing RSS2JSON with Podscribe...');
    const rssResponse = await fetch(rss2jsonUrl);
    if (rssResponse.ok) {
      const rssData = await rssResponse.json();
      console.log('RSS conversion successful!');
      console.log('Feed title:', rssData.feed?.title);
      console.log('Episodes found:', rssData.items?.length || 0);
    } else {
      console.log('RSS conversion failed');
    }
    
  } catch (error) {
    console.error('Error testing Spotify show:', error);
  }
}

testSpotifyShow();
