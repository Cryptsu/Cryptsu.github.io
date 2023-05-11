import { useState, useLayoutEffect, useMemo, useRef, useEffect } from "react";
import useOnce from "@/hooks/useOnce";
import Style from "@/components/Style";
import HomePosts from "./HomePosts";
import HomePageNumber from "./HomePageNumber";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import { AppConfig } from "@/lib/config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post";

type HomeContentProps = PropsWithChildren<{
  posts: PostFrontMatterType[]
}>

const HomeContent = ({children, posts, ...otherProps}: HomeContentProps) => {
  const [ currentPage, setCurrentPage ] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (currentPage !== null) {
      // For non-Chrome solutions
      document.documentElement.scrollTo({
        top: 0,
        behavior: "auto",
      })
  
      // For Chrome solutions
      document.body.scrollTo({
        top: 0,
        behavior: "auto",
      })
    }
  /* eslint-disable react-hooks/exhaustive-deps */}, [currentPage]);

  return (
    <>
      <Style style={HomePostsGroupStyles}>
        <HomePosts posts={
          posts.slice(
            AppConfig.HOME_POSTS_PER_PAGE * (currentPage === null ? 0 : currentPage), 
            AppConfig.HOME_POSTS_PER_PAGE * (currentPage === null ? 1 : currentPage+1),
          )
        }/>
      </Style>
      <Style style={HomePageNumberGroupStyles}>
        <HomePageNumber 
          currentPage={currentPage === null ? 0 : currentPage} 
          setCurrentPage={setCurrentPage} 
          noPosts={posts.length}
        />
      </Style>
    </>
  )
}

const HomePostsGroupStyles: CSS = {
  width: 892,
  '@large': {
    width: "calc(100% - 108px)"
  },
  '@medium': {
    width: "calc(100% - 16px)",
  }
}

const HomePageNumberGroupStyles: CSS = {
  width: 892,
  '@large': {
    width: "calc(100% - 108px)"
  },
  '@medium': {
    width: "calc(100% - 16px)",
  }
}

export default HomeContent;