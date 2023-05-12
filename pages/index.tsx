import { NextSeo } from "next-seo";
import { getAllPosts } from "@/lib/helpers/process-posts";
import HomeLayout from "@/components/Layouts/HomeLayout";
import { TxtConst } from "@/lib/consts";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { PostFrontMatterType } from "@/types/post";

///////////////////////////////////////////////////////////////////
// Main element
///////////////////////////////////////////////////////////////////

const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title={TxtConst.TXT_TITLE_HOME}
        description={TxtConst.TXT_DESC_HOME}
        openGraph={{
          title: TxtConst.TXT_TITLE_HOME,
        }}
      />

      <HomeLayout 
        posts={posts}
      />
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