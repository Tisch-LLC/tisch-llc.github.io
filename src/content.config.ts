import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    published_at: z.string(),
    modified_at: z.string(),
    desc: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
