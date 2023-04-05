import { useState } from "react";
import Style from "@/components/Style";
import HomeIntro from "./HomeIntro";
import HomePosts from "./HomePosts";
import HomePageNumber from "./HomePageNumber";
import { theme } from "@/lib/styles/stiches.config";
import { AppConfig } from "@/lib/config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post";

type HomeLayoutProps = PropsWithChildren<{
  posts: PostFrontMatterType[]
}>

const HomeLayout = ({children, posts, ...otherProps}: HomeLayoutProps) => {
  const [ currentPage, setCurrentPage ] = useState<number>(0);
  return (
    <Style style={HomeLayoutWrapperStyles} {...otherProps}>
      <Style style={HomeLayoutGroupStyles}>
        <HomeIntro/>
      </Style>
      <Style style={HomePostsGroupStyles}>
        <HomePosts posts={
          posts.slice(
            AppConfig.HOME_POSTS_PER_PAGE * currentPage, 
            AppConfig.HOME_POSTS_PER_PAGE * (currentPage+1)
          )
        }/>
      </Style>
      <Style style={HomePageNumberGroupStyles}>
        <HomePageNumber 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          noPosts={posts.length}
        />
      </Style>
    </Style>
  )
}

const HomeLayoutWrapperStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: 24,
};

const HomeLayoutGroupStyles: CSS = {
  width: 832,
}

const HomePostsGroupStyles: CSS = {
  width: 832,
}

const HomePageNumberGroupStyles: CSS = {
  width: 832,
}

export default HomeLayout;