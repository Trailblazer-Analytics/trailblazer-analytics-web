import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]).optional(),
    description: z.string().optional(),
    // HOOK: Enhanced tag system - add more personality to your content organization
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    // HOOK: Add vibe field for that raw, personal touch
    vibe: z.enum(['technical', 'rant', 'insight', 'story', 'hot-take']).optional(),
    // HOOK: Reading time - flexible to handle both numbers and strings
    readingTime: z.union([z.number(), z.string()]).optional(),
    // HOOK: Difficulty level for technical posts
    difficulty: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
    // HOOK: Support legacy field names for compatibility - handle both string and date
    publishDate: z.union([z.string(), z.date()]).optional(),
    author: z.string().optional(),
    category: z.string().optional(),
  }),
});

// Articles collection for Medium-backed content
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]).optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    mediumUrl: z.string().optional(), // Link to original Medium article
    readingTime: z.union([z.number(), z.string()]).optional(),
    author: z.string().optional(),
    published: z.boolean().default(true),
  }),
});



// Downloads collection for free downloads (including whitepapers)
const downloads = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    category: z.enum(['Templates', 'Tools', 'Guides', 'Checklists', 'Frameworks', 'Whitepapers']).optional(),
    fileType: z.string().optional(),
    fileSize: z.string().optional(),
    downloadUrl: z.string().optional(),
    featured: z.boolean().optional(),
    rating: z.number().optional(),
    downloads: z.number().optional(),
    image: z.string().optional(),
    // For whitepaper-specific fields
    pages: z.number().optional(),
    free: z.boolean().default(true), // Mark as free content
  }),
});

// Tools collection for gated/paid content
const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    category: z.enum(['Frameworks', 'Templates', 'Calculators', 'Courses', 'Premium Tools']).optional(),
    price: z.string().optional(),
    demoUrl: z.string().optional(),
    purchaseUrl: z.string().optional(),
    featured: z.boolean().optional(),
    rating: z.number().optional(),
    technologies: z.array(z.string()).optional(),
    image: z.string().optional(),
    gated: z.boolean().default(true), // Mark as gated content
    premium: z.boolean().default(false), // For paid content
  }),
});

export const collections = {
  blog,
  articles,
  downloads,
  tools,
};
