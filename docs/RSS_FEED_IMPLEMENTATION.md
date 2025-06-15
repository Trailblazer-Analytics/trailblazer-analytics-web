# Trailblazer Analytics RSS Feed Implementation

The Trailblazer Analytics website includes an RSS feed that aggregates content from blog posts and technical notes, making it easy for readers to subscribe and stay updated with new content.

## Feed Location

The RSS feed is available at: `https://trailblazeranalytics.com/rss.xml`

## Implementation Details

The RSS feed is implemented using the following components:

1. **RSS Generator**: Located at `src/pages/rss.xml.js`, this file creates a standards-compliant RSS 2.0 feed.
2. **Content Sources**: The feed aggregates content from:
   - Blog posts (`blog` collection)
   - Technical notes (`techNotes`/`tech-notes` collection)
   - Case studies (`caseStudies`/`case-studies` collection)
   - Podcast episodes (when available)
3. **RSS Link in Header**: A link to the RSS feed is included in the HTML `<head>` section of all pages through the `Base.astro` layout.

## Features

- **RSS 2.0 Compliant**: Uses proper XML namespaces and structure.
- **Content Aggregation**: Combines multiple content collections.
- **Sorted by Date**: Most recent content appears first.
- **Complete Metadata**: Includes titles, descriptions, publication dates, authors, and categories.
- **Full Content**: Each item includes the complete content of the article.
- **Media Support**: Featured images are included when available.
- **Podcast Support**: Enclosure tags for audio content when available.
- **Google News Compatible**: Follows the requirements for Google News indexing.

## Enhanced Error Handling

The implementation includes robust error handling for:

- Missing collections (with fallbacks for both camelCase and kebab-case naming)
- Invalid or missing dates (with multiple fallback options)
- Missing metadata (with sensible defaults)
- Collection structure variations (supports multiple content schemas)

## Testing and Validation

To test the RSS feed:

1. Build the site using `pnpm run build`
2. Check the output at `dist/rss.xml`
3. Run the verification script: `pnpm run verify-rss`
4. For online validation, use a service like [validator.w3.org/feed](https://validator.w3.org/feed/)

## Known Issues and Warnings

During the build process, several warnings related to content collections may appear:

1. **Auto-generated Collections Warning**:
   ```bash
   Auto-generating collections for folders in "src/content/" that are not defined as collections.
   This is deprecated, so you should define these collections yourself in "src/content.config.ts".
   The following collections have been auto-generated: caseStudies, techNotes
   ```

2. **Missing Content Directories Warning**:
   ```bash
   [WARN] [glob-loader] The base directory "src/content/tech-notes" does not exist.
   ```

The RSS feed implementation includes error handling to gracefully manage these issues. For a complete list of build warnings and recommended fixes, run `pnpm run fix-warnings` and see `docs/BUILD_WARNINGS.md`.

## Future Enhancements

Potential future enhancements could include:

- Custom RSS templates for different content types
- Analytics tracking for RSS usage
- Category-specific feeds
- JSON Feed alternative format

## Dependencies

This implementation relies on:

- The `rss` npm package
- Astro's content collections API
- (Optional) `fast-xml-parser` for RSS validation
