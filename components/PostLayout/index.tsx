import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { ContentContext } from "@/contexts/ContentContext";

// All MDX components
import Style from "@/components/Style";
import TableOfContent from "@/components/TableOfContent";
import mdxComponents from "@/components/MDXComponents";

import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";

import type { PropsWithChildren } from "react";
import type { MDXRemoteProps } from "next-mdx-remote";
import type { CSS } from "@stitches/react";
import type { PostWithSourceType } from "@/types/post.d";

type PostLayoutProps = PropsWithChildren<{
  data: PostWithSourceType,
}>

const PostLayout = ({children, data, ...otherProps}: PostLayoutProps) => {
  const [ headingIDs, setHeadingIDs ] = useState<{
                                          headingContent: string,
                                          headingID: string,
                                          level: number,
                                        }[]>([]);
  const [ headingID, setHeadingID ] = useState<{
                                        headingContent: string,
                                        headingID: string,
                                        level: number,
                                      }>();

  const addHeadingID = (content: string, id: string, level: number) => {
    // setHeadingID({
    //   headingContent: content,
    //   headingID: id,
    //   level: level,
    // })

    console.log('added', {
      headingContent: content,
      headingID: id,
      level: level,
    })
  }

  return (
    <ContentContext.Provider
      value={{
        headingIDs,
        addHeadingID,
      }}
    >
      <Style style={PostLayoutStyles}>
        <Style style={PostLeftGroupStyles}>
          <TableOfContent>
            Some data here?
          </TableOfContent>
        </Style>
        <Style style={PostContentGroupStyles}>
          <MDXRemote {...data.sourceContent} components={mdxComponents as MDXRemoteProps["components"]}/>
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