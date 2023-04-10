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
  const [ scrollXYs, setScrollXYs ] = useState<number[]>([0, 0]);

  useLayoutEffect(() => {
    if (currentPage !== null) {
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      let scrollWidth  = document.documentElement.scrollWidth  || document.body.scrollWidth;

      // For non-Chrome solutions
      document.documentElement.scrollTo({
        left: scrollWidth - scrollXYs[0], 
        top: scrollHeight - scrollXYs[1],
        behavior: "auto",
      })

      // For Chrome solutions
      document.body.scrollTo({
        left: scrollWidth - scrollXYs[0], 
        top: scrollHeight - scrollXYs[1],
        behavior: "auto",
      })
    }
  /* eslint-disable react-hooks/exhaustive-deps */}, [currentPage]);

  // Track scrolling on the website.
  const onContentScroll = () => {
    let scrollLeft   = document.documentElement.scrollLeft   || document.body.scrollLeft;
    let scrollTop    = document.documentElement.scrollTop    || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let scrollWidth  = document.documentElement.scrollWidth  || document.body.scrollWidth;

    // X, Y is set to be the counted from the bottom of page
    // instead of top.
    scrollXYs[0] = scrollWidth - scrollLeft;
    scrollXYs[1] = scrollHeight - scrollTop;
    setScrollXYs(scrollXYs);
  }

  useEffect(() => { 
    window.addEventListener('scroll', onContentScroll);
    return (
      () => window.removeEventListener('scroll', onContentScroll)
    )
  })

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
  width: 832,
}

const HomePageNumberGroupStyles: CSS = {
  width: 832,
}

export default HomeContent;