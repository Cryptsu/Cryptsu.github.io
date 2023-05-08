import Style from "@/components/Style";
import Section from "./Section";
import Year from "./Year";
import PostDate from "./PostDate";
import PostLink from "./PostLink";
import { theme } from "@/lib/styles/stiches.config";
import { AppConfig } from "@/lib/config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren, ReactElement } from "react";
import type { CSS } from "@stitches/react";
import type { PostsByYearType } from "@/types/post";

type PostsLayoutProps = PropsWithChildren<{
  postsByYear: PostsByYearType
}>

const PostsLayout = ({children, postsByYear, ...otherProps}: PostsLayoutProps) => {
  // All of this is from jarv.is
  const sections: ReactElement[] = [];
  
  Object.entries(postsByYear).forEach(([year, posts]) => {
    sections.push(
      <Section key={year}>
        <Year> 
          {year} 
        </Year>
        {
          posts.map((post, index) => 
            <>
              <PostDate
                date={post.date}
              />
              <PostLink 
                key={index}
                title={post.title}
                link={`/${AppConfig.POSTS_DIR}/${post.slug}`}
              />
            </>
          )
        }
      </Section>
    )
  }) 

  // grouped notes enter this component ordered chronologically -- we want reverse chronological
  const reversed = sections.reverse();

  return (
    <Style style={PostsLayoutStyles} {...otherProps}>
      {reversed}
    </Style>
  )
}

const PostsLayoutStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default PostsLayout;