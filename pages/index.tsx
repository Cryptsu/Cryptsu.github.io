import { getAllPosts } from "@/lib/helpers/process-posts";
import HomeLayout from "@/components/Layouts/HomeLayout";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { PostFrontMatterType } from "@/types/post";

const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <HomeLayout posts={posts}/>
    </>
  )
}

///////////////////////////////////////////////////////////////////
// Path registrations
///////////////////////////////////////////////////////////////////

export const getStaticProps: GetStaticProps<{posts: PostFrontMatterType[]}> = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    }
  }
}

export default Home;