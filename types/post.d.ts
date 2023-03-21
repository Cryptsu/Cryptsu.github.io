import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostFrontMatterType = {
  title: string;
  date: string;
  slug: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
};

export type PostWithSourceType = {
  frontMatter: PostFrontMatterType,
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>
};