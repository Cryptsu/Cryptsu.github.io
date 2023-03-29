import { createContext } from "react";
import type { Context, Dispatch, ReactNode } from "react";

export type HeadingInfoType = {
  headingContent: string | ReactNode,
  headingID: string,
  level: number,
}

type ContentContextType = (
  Context<{
    headingInfos: HeadingInfoType[];
    AddHeadingInfoReducer: Dispatch<HeadingInfoType>;
  }>
)

export const ContentContext: ContentContextType = createContext({
  headingInfos: [] as HeadingInfoType[],
  AddHeadingInfoReducer: (newHeadingInfo: HeadingInfoType) => {}
})