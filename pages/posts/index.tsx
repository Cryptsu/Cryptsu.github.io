import { NextSeo } from "next-seo";
import { getAllPosts } from "@/lib/helpers/process-posts";
import PostsLayout from "@/components/Layouts/PostsLayout";
import { TxtConst } from "@/lib/consts";
import { AppConfig } from "@/lib/config";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { PostsByYearType } from "@/types/post";

///////////////////////////////////////////////////////////////////
// Main element
///////////////////////////////////////////////////////////////////

const Posts = ({ postsByYear }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title={TxtConst.TXT_TITLE_POSTS}
        description={AppConfig.DESCRIPTIONS.POSTS}
        openGraph={{
          title: TxtConst.TXT_TITLE_POSTS,
        }}
      />
      
      <PostsLayout
        postsByYear={postsByYear}
      />
    </>
  )
}

///////////////////////////////////////////////////////////////////
// Path registrations
///////////////////////////////////////////////////////////////////

export const getStaticProps: GetStaticProps<{postsByYear: PostsByYearType}> = async () => {
  // Copied from jarv.is
  const posts = await getAllPosts();
  const postsByYear: PostsByYearType = {};
  posts.forEach((post) => {
    const year = new Date(post.date).getUTCFullYear();
    (postsByYear[year] || (postsByYear[year] = [])).push(post);
  })

  return {
    props: {
      postsByYear,
    }
  }
}

export default Posts;