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
import type { CSS } from "@stitches/react";
import type { HeadingInfoType, UpdateHeadingInfoReducerActionType } from "@/contexts/ContentContext"

type ContentProviderProps = PropsWithChildren<{}>

const fn = (currentHeadingInfos: HeadingInfoType[], action: UpdateHeadingInfoReducerActionType) => {
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
      if (currentHeadingInfos[findIndex].cmpViewPort !== action.data.cmpViewPort) {
        currentHeadingInfos[findIndex] = action.data;
        currentHeadingInfos = [...currentHeadingInfos]
      }
    case "append":
    default:
      return currentHeadingInfos;
  }
}

const ContentProvider = ({children, ...otherProps}: ContentProviderProps) => {
  const [ headingInfos, UpdateHeadingInfoReducer ] = useReducer(fn, []);

  return (
    <ContentContext.Provider
      value={{
        headingInfos,
        UpdateHeadingInfoReducer
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

const ContentProviderStyles: CSS = {

};

export default ContentProvider;