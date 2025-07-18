// Download tracking API endpoint
// Tracks downloads and provides download links

export async function POST({ request }) {
  try {
    const { downloadId, userEmail, downloadType = 'anonymous' } = await request.json();
    
    if (!downloadId) {
      return new Response(
        JSON.stringify({ error: 'Download ID is required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Download tracking data (empty for now - will be populated as new downloads are added)
    const downloads = {
      // Downloads will be added here as they become available
      // Example format:
      // 'download-slug': {
      //   filename: 'Download_File_Name.pdf',
      //   title: 'Download Title',
      //   size: '2.3 MB',
      //   type: 'PDF'
      // }
    };

    const download = downloads[downloadId];
    
    if (!download) {
      return new Response(
        JSON.stringify({ error: 'Download not found' }), 
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Log download (in production, you'd save this to a database)
    console.log(`Download tracked: ${downloadId} by ${userEmail || 'anonymous'} at ${new Date().toISOString()}`);
    
    // In production, you'd track this in your analytics/database
    await trackDownload(downloadId, userEmail, downloadType);
    
    // Generate download URL (in production, this would be a signed URL to your file storage)
    const downloadUrl = generateDownloadUrl(downloadId, download.filename);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        downloadUrl,
        filename: download.filename,
        title: download.title
      }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Download tracking error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process download. Please try again.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Track download in analytics/database
async function trackDownload(downloadId, userEmail, downloadType) {
  try {
    // In production, implement your tracking logic here:
    // - Save to database
    // - Send to analytics service (Google Analytics, Mixpanel, etc.)
    // - Update download counters
    // - Trigger email sequences if user provided email
    
    const trackingData = {
      downloadId,
      userEmail: userEmail || null,
      downloadType,
      timestamp: new Date().toISOString(),
      userAgent: 'browser', // You can get this from request headers
      referrer: 'website' // You can track referrer source
    };
    
    // Example: Send to external analytics
    if (import.meta.env.ANALYTICS_API_KEY) {
      await sendToAnalytics(trackingData);
    }
    
    // Example: Add to newsletter if email provided
    if (userEmail && import.meta.env.NEWSLETTER_PROVIDER) {
      await addToNewsletterWithTag(userEmail, `download-${downloadId}`);
    }
    
  } catch (error) {
    console.error('Failed to track download:', error);
    // Don't fail the download if tracking fails
  }
}

// Generate download URL
function generateDownloadUrl(downloadId, filename) {
  // In production, you'd generate signed URLs to your file storage (S3, GCS, etc.)
  // For now, return a placeholder that points to public assets
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4322';
  return `${baseUrl}/downloads/${filename}`;
}

// Send to analytics service
async function sendToAnalytics(trackingData) {
  // Example integration with Google Analytics, Mixpanel, etc.
  const analyticsKey = import.meta.env.ANALYTICS_API_KEY;
  
  if (!analyticsKey) return;
  
  try {
    // Example: Google Analytics 4 Measurement Protocol
    const response = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${import.meta.env.GA4_MEASUREMENT_ID}&api_secret=${analyticsKey}`, {
      method: 'POST',
      body: JSON.stringify({
        client_id: '555', // Generate proper client ID
        events: [{
          name: 'download',
          parameters: {
            item_id: trackingData.downloadId,
            item_name: trackingData.downloadId,
            item_category: 'resource',
            download_type: trackingData.downloadType
          }
        }]
      })
    });
    
    if (!response.ok) {
      console.warn('Failed to send to analytics:', response.status);
    }
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
}

// Add to newsletter with specific tag
async function addToNewsletterWithTag(email, tag) {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: tag,
        tags: [tag, 'download-user']
      }),
    });
    
    if (!response.ok) {
      console.warn('Failed to add to newsletter:', response.status);
    }
  } catch (error) {
    console.warn('Newsletter signup failed:', error);
  }
}
