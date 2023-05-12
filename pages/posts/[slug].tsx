import { NextSeo, ArticleJsonLd } from "next-seo";
import { articleJsonLd } from "@/lib/config/seo.config"

import { compilePost } from "@/lib/helpers/compile-post";
import { getAllPosts, getPostSlugs } from "@/lib/helpers/process-posts";
import PostLayout from "@/components/Layouts/PostLayout";
import { AppConfig } from "@/lib/config";

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import type { PostFrontMatterType, PostWithSourceType } from "@/types/post";

// Import styles of LaTeX code, because rehype-katex not do it for you...
import "katex/dist/katex.min.css" 

///////////////////////////////////////////////////////////////////
// Main element
///////////////////////////////////////////////////////////////////

export type PostProps = PostWithSourceType & {
  prevPost: PostFrontMatterType | null,
  nextPost: PostFrontMatterType | null,
}

const Post = ({frontMatter, sourceContent, prevPost, nextPost}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log({
    title: frontMatter.title,
    url: frontMatter.permalink,
    type: "article",
    article: {
      authors: [AppConfig.AUTHOR_NAME],
      tags: frontMatter.tags,
      publishedTime: frontMatter.date,
      modifiedTime: frontMatter.date,
    },
    images: [
      {
        url: `${frontMatter.coverImage || AppConfig.AUTHOR_LOGO}`,
        alt: frontMatter.title,
      },
    ],
  })

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description || AppConfig.AUTHOR_DESC}
        canonical={frontMatter.permalink}
        openGraph={{
          title: frontMatter.title,
          url: frontMatter.permalink,
          type: "article",
          article: {
            authors: [AppConfig.AUTHOR_NAME],
            tags: frontMatter.tags,
            publishedTime: frontMatter.date,
            modifiedTime: frontMatter.date,
          },
          images: [
            {
              url: `${frontMatter.coverImage || AppConfig.AUTHOR_LOGO}`,
              alt: frontMatter.title,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <ArticleJsonLd
        url={frontMatter.permalink}
        title={frontMatter.title}
        description={frontMatter.description || AppConfig.AUTHOR_DESC}
        datePublished={frontMatter.date}
        dateModified={frontMatter.date}
        images={[`${frontMatter.coverImage || AppConfig.AUTHOR_LOGO}`]}
        {...articleJsonLd}
      />

      <PostLayout
        frontMatter={frontMatter}
        sourceContent={sourceContent}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </>
  )
}

///////////////////////////////////////////////////////////////////
// Path registrations
///////////////////////////////////////////////////////////////////

export const getStaticProps: GetStaticProps<PostProps, Pick<PostFrontMatterType, "slug">> = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    }
  }

  // NOTE: It is assumed that all posts is sorted
  // by time.
  const allPosts = await getAllPosts();
  const slugIndex = allPosts.findIndex(post => post.slug === params.slug);
  
  const {
    frontMatter,
    sourceContent,
  } = await compilePost(params.slug);

  return {
    props: {
      frontMatter,
      sourceContent,
      prevPost: slugIndex > 0                   ? allPosts[slugIndex - 1] : null,
      nextPost: slugIndex < allPosts.length - 1 ? allPosts[slugIndex + 1] : null,
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