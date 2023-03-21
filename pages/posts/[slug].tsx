import { MDXRemote } from "next-mdx-remote";
import { compilePost } from "@/lib/helpers/compile-post";
import { getPostSlugs } from "@/lib/helpers/process-posts";
import type { PostFrontMatterType, PostWithSourceType } from "@/types/post";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const components = {}

const Post = ({frontMatter, sourceContent}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <MDXRemote {...sourceContent} components={components}/>
    </>
  )
}

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