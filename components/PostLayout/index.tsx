import { useEffect, useReducer } from "react";
import { MDXRemote } from "next-mdx-remote";
import { ContentContext } from "@/contexts/ContentContext";

// All MDX components
import Style from "@/components/Style";
import TableOfContent from "@/components/TableOfContent";
import mdxComponents from "@/components/MDXComponents";

import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";

import type { PropsWithChildren } from "react";
import type { MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { CSS } from "@stitches/react";
import type { PostFrontMatterType } from "@/types/post.d";
import type { HeadingInfoType, UpdateHeadingInfoReducerActionType } from "@/contexts/ContentContext"

type PostLayoutProps = PropsWithChildren<{
  frontMatter: PostFrontMatterType,
  sourceContent: MDXRemoteSerializeResult<Record<string, unknown>>,
}>

const PostLayout = ({children, frontMatter, sourceContent, ...otherProps}: PostLayoutProps) => {
  const [ headingInfos, UpdateHeadingInfoReducer ] = useReducer(
    (currentHeadingInfos: HeadingInfoType[], action: UpdateHeadingInfoReducerActionType) => {
      const findIndex = currentHeadingInfos.findIndex(
        (currentHeadingInfo) => 
          currentHeadingInfo.headingID === action.data.headingID &&
          currentHeadingInfo.level === action.data.level
      );

      if (findIndex === -1) {
        switch (action.name)
        {
          case "append":
            return [
              ...currentHeadingInfos, 
              action.data
            ]
          default:
            return currentHeadingInfos;
        }
      }

      switch (action.name)
      {
        case "updateVisibility":
          currentHeadingInfos[findIndex] = action.data;
        case "append":
        default:
          return currentHeadingInfos;
      }
    }
  , []);

  return (
    <ContentContext.Provider
      value={{
        headingInfos,
        UpdateHeadingInfoReducer
      }}
    >
      <Style style={PostLayoutStyles}>
        <Style style={PostLeftGroupStyles}>
          <TableOfContent/>
        </Style>
        <Style style={PostContentGroupStyles}>
          <MDXRemote {...sourceContent} components={mdxComponents as MDXRemoteProps["components"]}/>
        </Style>
        <Style style={PostRightGroupStyles}></Style>
      </Style>
    </ContentContext.Provider>
  )
}

const PostLayoutStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'post-left post-content post-right'",
  gridTemplateColumns: "calc(50% - 336px) 672px calc(50% - 336px)",
};

const PostLeftGroupStyles: CSS = {
  gridArea: 'post-left',
};

const PostContentGroupStyles: CSS = {
  gridArea: 'post-content',
};

const PostRightGroupStyles: CSS = {
  gridArea: 'post-right'
};

export default PostLayout;