import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
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
