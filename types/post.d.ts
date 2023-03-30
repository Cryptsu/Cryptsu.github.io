import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostFrontMatterType = {
  title: string;
  date: string;
  slug: string;
  description?: string;
  coverImage?: string;
  minsRead: number;
  noWords: number;
  tags?: string[];
};

export type PostWithSourceType = {
  frontMatter: PostFrontMatterType,
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>
};