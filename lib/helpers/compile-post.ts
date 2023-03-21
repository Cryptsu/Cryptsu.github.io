import { serialize } from "next-mdx-remote/serialize";
import { getPostData } from "./process-posts"
import type { PostWithSources } from "@/types/post";

export const compilePost 
  = async (slug: string)
  : Promise<PostWithSources> => 
{
  const { 
    frontMatter, 
    content
  } = await getPostData(slug);

  const sourceContent = await serialize(content, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [
        [
          remarkGfm,
          {

          }
        ],

        [
          remarkUnwrapImages
        ],

        [
          remarkMath
        ]
      ],

      rehypePlugins: [
        [
          rehypeKatex
        ]
      ]
    }
  });
}