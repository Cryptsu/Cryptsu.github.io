import { serialize } from "next-mdx-remote/serialize";
import { getPostData } from "./process-posts"

// remark/rehype markdown plugins
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";

import type { PostWithSourceType } from "@/types/post";

export const compilePost 
  = async (slug: string)
  : Promise<PostWithSourceType> => 
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
          remarkGfm,  // Supports tables, footnotes, etc...
        ],

        [
          remarkUnwrapImages  // Remove redundant lines in paragraphs?
        ],

        [
          remarkMath  // To display one-line latex.
        ],

        [
          remarkEmoji // Add supports for Emojis.
        ]
      ],

      rehypePlugins: [
        [
          rehypeKatex  // To display multi-line latex.
        ],

        [
          rehypeSlug   // Attaches IDs to headers based on the content. Maybe useful for table of content?
        ],

        [
          rehypePrism,  // Syntax highlighting for code.
          {
            ignoreMissing: true,
          }
        ]
      ]
    }
  });

  return {
    frontMatter,
    sourceContent
  }
}