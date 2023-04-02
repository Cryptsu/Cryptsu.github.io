import Style from "@/components/Style";
import HomeIntro from "./HomeIntro";
import HomePosts from "./HomePosts";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post";

type HomeLayoutProps = PropsWithChildren<{
  posts: PostFrontMatterType[]
}>

const HomeLayout = ({children, posts, ...otherProps}: HomeLayoutProps) => {
  return (
    <Style style={HomeLayoutWrapperStyles} {...otherProps}>
      <Style style={HomeLayoutStyles}>
        <HomeIntro/>
      </Style>
      <Style style={HomePostsStyles}>
        <HomePosts posts={posts}/>
      </Style>
    </Style>
  )
}

const HomeLayoutWrapperStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const HomeLayoutStyles: CSS = {
  width: 832,
}

const HomePostsStyles: CSS = {
  width: 832,
}

export default HomeLayout;