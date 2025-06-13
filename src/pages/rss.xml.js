export async function GET() {
  // RSS feed temporarily disabled
  return new Response('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Trailblazer Analytics</title><description>RSS feed temporarily disabled</description></channel></rss>', { 
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
