import { MDXRemote } from "next-mdx-remote";
import { compilePost } from "@/lib/helpers/compile-post";
import { getPostSlugs } from "@/lib/helpers/process-posts";

// All MDX components
import Style from "@/components/Style";
import TableOfContent from "@/components/TableOfContent";
import mdxComponents from "@/components/MDXComponents";

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import type { MDXRemoteProps } from "next-mdx-remote";
import type { PostFrontMatterType, PostWithSourceType } from "@/types/post";
import type { CSS } from "@stitches/react";

// Import styles of LaTeX code, because rehype-katex not do it for you...
import "katex/dist/katex.min.css" 

///////////////////////////////////////////////////////////////////
// Main element
///////////////////////////////////////////////////////////////////

const Post = ({frontMatter, sourceContent}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Style style={PostLayoutStyles}>
        <Style style={PostLeftGroupStyles}>
          <TableOfContent>
            Some data here?
          </TableOfContent>
        </Style>
        <Style style={PostContentGroupStyles}>
          <MDXRemote {...sourceContent} components={mdxComponents as MDXRemoteProps["components"]}/>
        </Style>
        <Style style={PostRightGroupStyles}></Style>
      </Style>
    </>
  )
}

///////////////////////////////////////////////////////////////////
// CSS Customizings
///////////////////////////////////////////////////////////////////

const PostLayoutStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'post-left post-content post-right'",
  gridTemplateColumns: "384px calc(100% - 384px*2) 384px",
};

const PostLeftGroupStyles: CSS = {
  gridArea: 'post-left',
};

const PostContentGroupStyles: CSS = {
  gridArea: 'post-content',
};

const PostRightGroupStyles: CSS = {
  gridArea: 'post-right'
};

///////////////////////////////////////////////////////////////////
// Path registrations
///////////////////////////////////////////////////////////////////

export const getStaticProps: GetStaticProps<PostWithSourceType, Pick<PostFrontMatterType, "slug">> = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    }
  }
  
  const {
    frontMatter,
    sourceContent,
  } = await compilePost(params.slug);

  return {
    props: {
      frontMatter,
      sourceContent,
    },
    revalidate: 2, // For debug...
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPostSlugs();
  const paths = slugs.map((slug) => ({ params: { slug }}));

  return {
    paths,
    fallback: false
  }
}

export default Post;