import glob from "fast-glob";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import pMap from "p-map";
import pMemoize from "p-memoize";
import readingTime from "reading-time";
import { AppConfig } from "@/lib/config";
import { formatDate } from "@/lib/helpers/format-date";
import type { PostFrontMatterType } from "@/types/post";

export const getPostSlugs 
  = async ()
  : Promise<string[]> => 
{
  const postFileNames = await glob("*.mdx", {
    cwd: path.join(
      process.cwd(), 
      AppConfig.POSTS_DIR
    ),
    dot: false, // .xxxx.mdx files will not be published.
  })

  const slugs = postFileNames.map(
    (postFileName) => postFileName.replace(/\.mdx$/, "")
  );
  return slugs;
};

export const getPostData
  = async (slug: string)
  : Promise<{
      frontMatter: PostFrontMatterType;
      content: string;
    }> => 
{
  const postFullPath = path.join(
    process.cwd(), 
    AppConfig.POSTS_DIR, 
    `${slug}.mdx`
  );

  const rawContent = await fs.readFile(postFullPath, "utf-8");
  const {
    data,
    content
  } = matter(rawContent);

  return {
    frontMatter: {
      ...(data as Partial<PostFrontMatterType>),
      date: formatDate(data.date),
      title: (data.title === undefined ? "" : data.title),
      minsRead: Math.round(readingTime(rawContent).minutes),
      noWords: readingTime(rawContent).words,
      permalink: `${AppConfig.BLOG_URL}/${AppConfig.POSTS_DIR}/${slug}/`,
      slug,
    },
    content
  }
}

export const getAllPosts
  = pMemoize(
      async ()
    : Promise<PostFrontMatterType[]> =>
    {
      const slugs = await getPostSlugs();
      const datas = await pMap(slugs, async (slug) => (await getPostData(slug)).frontMatter);
      
      // Now it is correct :)
      datas.sort((post1, post2) => (post1.date > post2.date ? -1:1));
      return datas;
    }
  )