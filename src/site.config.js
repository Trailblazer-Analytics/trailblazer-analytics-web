// Centralized site config for analytics, SEO, and other go-live settings
export default {  // Site Information
  title: "Trailblazer Analytics",
  description: "Manager Business Insights at Lennar | Host of Trailblazer Analytics Podcast | 15+ years transforming raw data into strategic business value through BI, automation, and AI integrations.",
  url: "https://anykolaiszyn.github.io/trailblazer-analytics-devkit",
  author: "Alexander Nykolaiszyn",// Content Sources
  mediumUsername: "alex.nykolaiszyn", // Real Medium username
  spotifyShowId: "7r1DNHAYJr4Xme88DvMBuX", // Real Spotify podcast ID
    // Analytics & Tracking
  plausibleDomain: "anykolaiszyn.github.io", // GitHub Pages domain
  googleAnalyticsId: "", // Add when configured
  hotjarId: "", // Add when configured// Social Media
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
  downloadTrackingEnabled: true,    // API Settings
  corsOrigins: ["https://anykolaiszyn.github.io", "http://localhost:4321", "http://localhost:4322", "http://localhost:4323", "http://localhost:4324"]
};
