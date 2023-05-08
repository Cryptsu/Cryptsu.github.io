import { memo } from "react";
import { MDXRemote } from "next-mdx-remote";
import mdxComponents from "@/components/MDXComponents";
import type { PropsWithChildren } from "react";
import type { MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";

type PostContentProps = PropsWithChildren<{
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>
}>

const PostContent = ({sourceContent}: PostContentProps) => 
  <MDXRemote {...sourceContent} components={mdxComponents as MDXRemoteProps["components"]}/>

export default memo<PostContentProps>(PostContent);