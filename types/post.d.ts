import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostFrontMatterType = {
  title: string;
  date: string;
  slug: string;
  permalink: string;
  description?: string;
  coverImage?: string;
  minsRead: number;
  tags?: string[];
  draft: boolean;
  noWords: number;
};

export type PostWithSourceType = {
  frontMatter: PostFrontMatterType,
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>
};

export type PostsByYearType = {
  [year: string]: PostFrontMatterType[];
};
