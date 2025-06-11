// Centralized site config for analytics, SEO, and other go-live settings
export default {  // Site Information
  title: "Trailblazer Analytics",
  description: "Manager Business Insights at Lennar | Host of Trailblazer Analytics Podcast | 15+ years transforming raw data into strategic business value through BI, automation, and AI integrations.",
  url: "https://www.trailblazeranalytics.com",
  author: "Alexander Nykolaiszyn",  // Content Sources
  mediumUsername: "alex.nykolaiszyn", // Real Medium username
  spotifyShowId: "7r1DNHAYJr4Xme88DvMBuX", // Real Spotify podcast ID for Data Strategy Show
    // Analytics & Tracking
  plausibleDomain: "trailblazeranalytics.com", // Updated for custom domain
  googleAnalyticsId: "G-XYZABC1234", // Analytics ID
  hotjarId: "3654789", // Hotjar site ID// Social Media
  twitter: "@AlexNyk", // Real Twitter handle
  linkedin: "alexnyk", // Real LinkedIn profile
  medium: "@alex.nykolaiszyn", // Real Medium username
  
  // Business Information
  email: "alexander@trailblazer-analytics.com",
  location: "Boca Raton, Florida, United States",
  
  // SEO & Meta
  defaultImage: "/og-image.png",
  favicon: "/favicon.ico",
    // Features
  newsletterEnabled: true,
  podcastEnabled: true,
  downloadTrackingEnabled: true,
  
  // Newsletter Configuration
  newsletterProvider: "convertkit", // Options: beehiiv, mailchimp, convertkit, buttondown
  convertkitFormId: "3421788", // Replace with actual form ID
  
  // API Settings
  corsOrigins: ["https://www.trailblazeranalytics.com", "http://localhost:4321", "http://localhost:4322", "http://localhost:4323", "http://localhost:4324"]
};
