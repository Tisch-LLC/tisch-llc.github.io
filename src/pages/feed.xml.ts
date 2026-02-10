import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { SITE } from "../site";
import { sortByPublishedAtDesc, toDate } from "../utils/date";
import { toPostPath } from "../utils/posts";

export async function GET(context: { site: URL | undefined }) {
  const posts = sortByPublishedAtDesc(await getCollection("posts"));

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.desc ?? SITE.description,
      pubDate: toDate(post.data.published_at) ?? new Date(),
      link: toPostPath(post.id),
    })),
  });
}
