import { compilePost } from "@/lib/helpers/compile-post";
import { getPostSlugs } from "@/lib/helpers/process-posts";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const Post = () => {
  return (
    <>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const {
    frontMatter,
    sourceTitle,
    sourceContent,
  } = await compilePost(params.slug);

  return {
    props: {

    }
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