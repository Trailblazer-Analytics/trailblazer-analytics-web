# Spotify Integration Configuration

## Overview
The Trailblazer Analytics DevKit now includes enhanced Spotify podcast integration that can fetch real episode data from the "Morning Metrics" podcast on Spotify.

## Integration Methods

### 1. Live Spotify Web API (Recommended)
To enable real-time episode fetching from Spotify:

1. **Get Spotify API Credentials**:
   - Go to [Spotify for Developers](https://developer.spotify.com/dashboard)
   - Create a new app
   - Get your Client ID and Client Secret

2. **Configure Environment Variables**:
   ```bash
   # Add to .env.local (create if doesn't exist)
   SPOTIFY_CLIENT_ID=your_client_id_here
   SPOTIFY_CLIENT_SECRET=your_client_secret_here
   ```

3. **Update Astro Config**:
   ```javascript
   // In astro.config.mjs, add environment variables access
   export default defineConfig({
     // ... existing config
     vite: {
       define: {
         'process.env.SPOTIFY_CLIENT_ID': JSON.stringify(process.env.SPOTIFY_CLIENT_ID),
         'process.env.SPOTIFY_CLIENT_SECRET': JSON.stringify(process.env.SPOTIFY_CLIENT_SECRET)
       }
     }
   });
   ```

### 2. Current Implementation (Active)
The podcast page currently uses:
- **Live show verification** via Spotify oEmbed API
- **Curated episode content** that reflects the actual podcast topics
- **Real Spotify embed** for direct playback
- **Dynamic show title** fetched from Spotify

### 3. Fallback Strategies
The integration includes multiple fallback methods:
- Spotify Web API (when credentials provided)
- Alternative RSS services
- Spotify oEmbed for basic show info
- Curated episodes with verified show connection

## Files Modified

- `src/pages/podcast.astro` - Enhanced with live show info fetching
- `scripts/spotify-integration.js` - Comprehensive integration script
- `src/site.config.js` - Contains real Spotify show ID

## Current Status

✅ **Working Features**:
- Live Spotify show verification
- Real Spotify embed player
- Dynamic show title from Spotify
- Curated episodes matching actual content
- Professional podcast page layout

🔄 **Optional Enhancements**:
- Real-time episode fetching (requires API credentials)
- Automatic episode updates
- Episode-specific Spotify embeds

## Testing

Run the test script to verify integration:
```bash
node test-spotify.js
```

This confirms:
- Spotify show exists and is accessible
- oEmbed API returns show information
- Integration is properly configured

## Live URL

The podcast is connected to the real Spotify show:
https://open.spotify.com/show/7r1DNHAYJr4Xme88DvMBuX

## Next Steps

1. **For Full API Integration**: Add Spotify credentials as described above
2. **For Automated Updates**: Set up scheduled builds to refresh episode data
3. **For Enhanced Analytics**: Add episode tracking and engagement metrics
