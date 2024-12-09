import { serialize } from "next-mdx-remote/serialize";
import { minify } from "uglify-js";
import { getPostData } from "./process-posts";
import { customRemarkDirective } from "./compile-directive";

// remark/rehype markdown plugins
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import remarkDirective from "remark-directive";

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
        ],

        [
          remarkDirective
        ],

        [
          customRemarkDirective
        ],
      ],

      rehypePlugins: [
        [
          rehypeKatex,  // To display multi-line latex.
          {
            // Configure error handling
            strict: (errorCode: string, errorMsg: string) => {
              // Ignore this error
              if (errorCode == 'newLineInDisplayMode') {
                return;
              }
              console.log(`LaTeX-incompatible input and strict mode is set to be an optional function: ${errorMsg} [${errorCode}]`)
            }
          }
        ],

        [
          rehypeSlug    // Attaches IDs to headers based on the content. Maybe useful for table of content?
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

  // (original idea from Jarv.is)
  //
  // Well, it seems like they still haven't minify the code, 
  // so I'll have to do it myself. 
  //
  // This activity reduces the code size by 40%, which is
  // why I decided to use it after my page got into
  // 1MB in size! 
  //
  // But it creates 3x build time...
  //
  const compiledSourceContent
    = minify(
        sourceContent.compiledSource, {
          toplevel: true,
          parse: {
            bare_returns: true,
          }
        }
      ).code;

  return {
    frontMatter,
    sourceContent: {
      ...sourceContent,
      compiledSource: compiledSourceContent
    }
  }

  // return {
  //   frontMatter,
  //   sourceContent
  // }
}