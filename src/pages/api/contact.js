// Contact form API endpoint
// Supports multiple email providers: Resend, SendGrid, Mailgun, Nodemailer

export async function POST({ request }) {
  try {
    const formData = await request.json();
    const { 
      name, 
      email, 
      company, 
      projectType, 
      budget, 
      timeline, 
      message,
      source = 'contact-form'
    } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email address is required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Choose your email provider
    const provider = import.meta.env.EMAIL_PROVIDER || 'resend';
    
    let result;
    
    switch (provider) {
      case 'resend':
        result = await sendWithResend(formData);
        break;
      case 'sendgrid':
        result = await sendWithSendGrid(formData);
        break;
      case 'mailgun':
        result = await sendWithMailgun(formData);
        break;
      case 'nodemailer':
        result = await sendWithNodemailer(formData);
        break;
      default:
        // Fallback: log to console for development
        console.log('Contact form submission:', formData);
        result = { success: true, message: 'Message received' };
    }

    return new Response(
      JSON.stringify(result), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Resend integration (recommended for simplicity)
async function sendWithResend(formData) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_EMAIL || 'hello@trailblazer-analytics.com';
  
  if (!apiKey) {
    throw new Error('Resend API key not configured');
  }

  const emailContent = createEmailContent(formData);
  
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@trailblazer-analytics.com',
      to: [toEmail],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent.html,
      text: emailContent.text,
      reply_to: formData.email
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }

  return { success: true, message: 'Message sent successfully!' };
}

// SendGrid integration
async function sendWithSendGrid(formData) {
  const apiKey = import.meta.env.SENDGRID_API_KEY;
  const toEmail = import.meta.env.CONTACT_EMAIL || 'hello@trailblazer-analytics.com';
  const fromEmail = import.meta.env.SENDGRID_FROM_EMAIL;
  
  if (!apiKey || !fromEmail) {
    throw new Error('SendGrid credentials not configured');
  }

  const emailContent = createEmailContent(formData);
  
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: toEmail }],
        subject: `New Contact Form Submission from ${formData.name}`
      }],
      from: { email: fromEmail, name: 'Trailblazer Analytics Contact Form' },
      reply_to: { email: formData.email, name: formData.name },
      content: [
        { type: 'text/plain', value: emailContent.text },
        { type: 'text/html', value: emailContent.html }
      ]
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid API error: ${error}`);
  }

  return { success: true, message: 'Message sent successfully!' };
}

// Mailgun integration
async function sendWithMailgun(formData) {
  const apiKey = import.meta.env.MAILGUN_API_KEY;
  const domain = import.meta.env.MAILGUN_DOMAIN;
  const toEmail = import.meta.env.CONTACT_EMAIL || 'hello@trailblazer-analytics.com';
  
  if (!apiKey || !domain) {
    throw new Error('Mailgun credentials not configured');
  }

  const emailContent = createEmailContent(formData);
  
  const formBody = new URLSearchParams({
    from: `Trailblazer Analytics Contact <noreply@${domain}>`,
    to: toEmail,
    subject: `New Contact Form Submission from ${formData.name}`,
    text: emailContent.text,
    html: emailContent.html,
    'h:Reply-To': formData.email
  });

  const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`api:${apiKey}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Mailgun API error: ${error}`);
  }

  return { success: true, message: 'Message sent successfully!' };
}

// Email content generator
function createEmailContent(formData) {
  const { name, email, company, projectType, budget, timeline, message } = formData;
  
  const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Project Type: ${projectType || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

Message:
${message}

---
Submitted via Trailblazer Analytics contact form
  `.trim();

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #008F55; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #008F55; }
        .message-box { background-color: white; padding: 15px; border-left: 4px solid #CFB53B; margin-top: 20px; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div>${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div><a href="mailto:${email}">${email}</a></div>
          </div>
          ${company ? `<div class="field"><div class="label">Company:</div><div>${company}</div></div>` : ''}
          ${projectType ? `<div class="field"><div class="label">Project Type:</div><div>${projectType}</div></div>` : ''}
          ${budget ? `<div class="field"><div class="label">Budget Range:</div><div>${budget}</div></div>` : ''}
          ${timeline ? `<div class="field"><div class="label">Timeline:</div><div>${timeline}</div></div>` : ''}
          
          <div class="message-box">
            <div class="label">Message:</div>
            <div style="margin-top: 10px;">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          Submitted via Trailblazer Analytics contact form
        </div>
      </div>
    </body>
    </html>
  `;

  return { text, html };
}
