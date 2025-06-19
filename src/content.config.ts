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

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    client: z.string().optional(),
    industry: z.string().optional(),
    summary: z.string().optional(),
    description: z.string().optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    results: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    image: z.string().optional(), // Added image field
  }),
});

const techNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    readTime: z.string().optional(),
    category: z.enum(['Python', 'SQL', 'JavaScript', 'ML', 'Data Engineering', 'Visualization']).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    image: z.string().optional(), // Added image field
  }),
});

const whitepapers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    pages: z.number().optional(),
    downloadUrl: z.string().optional(),
    gated: z.boolean().optional(),
    featured: z.boolean().optional(),
    rating: z.number().optional(),
    downloads: z.number().optional(),
    image: z.string().optional(), // Added image field
  }),
});

const downloads = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    category: z.enum(['Templates', 'Tools', 'Guides', 'Checklists', 'Frameworks']).optional(),
    fileType: z.string().optional(),
    fileSize: z.string().optional(),
    downloadUrl: z.string().optional(),
    featured: z.boolean().optional(),
    rating: z.number().optional(),
    downloads: z.number().optional(),
    image: z.string().optional(), // Added image field
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    category: z.enum(['Frameworks', 'Templates', 'Calculators', 'Courses']).optional(),
    price: z.string().optional(),
    demoUrl: z.string().optional(),
    purchaseUrl: z.string().optional(),
    featured: z.boolean().optional(),
    rating: z.number().optional(),
    technologies: z.array(z.string()).optional(),
    image: z.string().optional(), // Added image field
  }),
});

export const collections = {
  blog,
  caseStudies,
  techNotes,
  whitepapers,
  downloads,
  tools,
  // HOOK: Add folder-name aliases to prevent auto-generation warnings
  'case-studies': caseStudies,
  'tech-notes': techNotes,
};
