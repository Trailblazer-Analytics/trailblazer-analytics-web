# How to Add, Edit, or Remove Blog Posts

This guide explains how to manage blog posts on your Trailblazer Analytics site. No coding experience is required—just follow these steps!

## 1. Add a New Blog Post
1. Open the folder: `src/content/blog/`.
2. Create a new file. Name it something short and unique, like `my-first-post.mdx`.
3. Copy and paste this template at the top of your new file:
   ```mdx
   ---
   title: "Blog Post Title"
   date: "2025-05-14"
   description: "Short summary of the post."
   ---
   
   Write your full blog post here. You can use Markdown formatting.
   ```
4. Fill in the `title`, `date`, and `description` fields. Then write your blog content below the `---` line.
5. Save the file. The new blog post will appear on the blog page automatically.

## 2. Edit an Existing Blog Post
1. In `src/content/blog/`, find the `.mdx` file you want to update.
2. Open it and change any of the fields or content.
3. Save the file. Your changes will show up on the site after the next build or deploy.

## 3. Remove a Blog Post
1. In `src/content/blog/`, find the `.mdx` file you want to remove.
2. Delete the file.
3. The blog post will disappear from the blog page automatically.

## 4. Tips
- You can preview your changes locally by running `pnpm run dev` and visiting the blog page.
- All blog posts are version-controlled in Git, so you can always restore previous versions if needed.
- If you want to add new fields (like tags or author), ask your developer to update the schema in `src/content.config.ts` and the blog post layout.

---
If you have questions or need help, contact your developer or project lead.
