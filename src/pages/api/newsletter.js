// Newsletter subscription API endpoint
// Supports multiple providers: Beehiiv, Mailchimp, ConvertKit, Buttondown

export async function POST({ request }) {
  try {
    const { email, source = 'website' } = await request.json();
    
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email address is required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Choose your newsletter provider
    const provider = import.meta.env.NEWSLETTER_PROVIDER || 'beehiiv';
      let result;
    
    switch (provider) {
      case 'beehiiv':
        result = await subscribeBeehiiv(email, source);
        break;
      case 'mailchimp':
        result = await subscribeMailchimp(email, source);
        break;
      case 'convertkit':
        result = await subscribeConvertKit(email, source);
        break;
      case 'buttondown':
        result = await subscribeButtondown(email, source);
        break;
      default:
        // Fallback: log to console for development
        console.log(`Newsletter signup: ${email} from ${source}`);
        result = { success: true, message: 'Subscription recorded' };
    }

    return new Response(
      JSON.stringify(result), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe. Please try again.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Beehiiv integration
async function subscribeBeehiiv(email, source) {
  const apiKey = import.meta.env.BEEHIIV_API_KEY;
  const publicationId = import.meta.env.BEEHIIV_PUBLICATION_ID;
  
  if (!apiKey || !publicationId) {
    throw new Error('Beehiiv credentials not configured');
  }

  const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      reactivate_existing: true,
      send_welcome_email: true,
      utm_source: source,
      custom_fields: {
        source: source
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Beehiiv API error: ${error}`);
  }

  return { success: true, message: 'Successfully subscribed to newsletter!' };
}

// Mailchimp integration
async function subscribeMailchimp(email, source) {
  const apiKey = import.meta.env.MAILCHIMP_API_KEY;
  const listId = import.meta.env.MAILCHIMP_LIST_ID;
  const server = apiKey?.split('-')[1]; // Extract server from API key
  
  if (!apiKey || !listId) {
    throw new Error('Mailchimp credentials not configured');
  }

  const response = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`anystring:${apiKey}`)}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      tags: [source],
      merge_fields: {
        SOURCE: source
      }
    })
  });

  const data = await response.json();
  
  if (!response.ok && data.title !== 'Member Exists') {
    throw new Error(`Mailchimp API error: ${data.detail || data.title}`);
  }

  return { success: true, message: 'Successfully subscribed to newsletter!' };
}

// ConvertKit integration
async function subscribeConvertKit(email, source) {
  const apiKey = import.meta.env.CONVERTKIT_API_KEY;
  const formId = import.meta.env.CONVERTKIT_FORM_ID;
  
  if (!apiKey || !formId) {
    throw new Error('ConvertKit credentials not configured');
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: apiKey,
      email,
      tags: [source],
      fields: {
        source: source
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ConvertKit API error: ${error}`);
  }

  return { success: true, message: 'Successfully subscribed to newsletter!' };
}

// Buttondown integration
async function subscribeButtondown(email, source) {
  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
  
  if (!apiKey) {
    throw new Error('Buttondown credentials not configured');
  }

  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      tags: [source],
      metadata: {
        source: source,
        signup_date: new Date().toISOString()
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Buttondown API error: ${error}`);
  }

  return { success: true, message: 'Successfully subscribed to newsletter!' };
}
