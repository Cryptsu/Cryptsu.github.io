import Style from "@/components/Style";
import HomeIntro from "./HomeIntro";
import HomeContent from "./HomeContent";
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
      <Style style={HomeLayoutGroupStyles}>
        <HomeIntro/>
      </Style>
      <HomeContent posts={posts}/>
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
  width: 892,
  '@large': {
    width: "calc(100% - 108px)"
  }
}

export default HomeLayout;