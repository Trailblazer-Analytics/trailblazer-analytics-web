import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../site.config.js';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  // Sort posts by date, newest first
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.date) - new Date(a.data.date)
  );

  return rss({
    title: 'Trailblazer Analytics Blog',
    description: 'Internal project logs, tool development updates, and raw insights from the Trailblazer Analytics journey.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
            author: post.data.author || siteConfig.author,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
