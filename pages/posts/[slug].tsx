import { compilePost } from "@/lib/helpers/compile-post";
import { getPostSlugs } from "@/lib/helpers/process-posts";

import PostLayout from "@/components/PostLayout";

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import type { PostFrontMatterType, PostWithSourceType } from "@/types/post";

// Import styles of LaTeX code, because rehype-katex not do it for you...
import "katex/dist/katex.min.css" 

///////////////////////////////////////////////////////////////////
// Main element
///////////////////////////////////////////////////////////////////

const Post = ({frontMatter, sourceContent}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PostLayout
        data={{
          frontMatter,
          sourceContent
        }}
      />
    </>
  )
}

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