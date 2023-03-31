import { createContext } from "react";
import type { Context, Dispatch, ReactNode, RefObject } from "react";

export type HeadingInfoType = {
  headingContent: string | ReactNode,
  headingID: string,
  headingRef: RefObject<HTMLElement>,
  level: number,
}

type ContentContextType = (
  Context<{
    headingInfos: HeadingInfoType[];
    UpdateHeadingInfoReducer: Dispatch<HeadingInfoType>;
  }>
)

export const ContentContext: ContentContextType = createContext({
  headingInfos: [] as HeadingInfoType[],
  UpdateHeadingInfoReducer: (newHeadingInfo: HeadingInfoType) => {}
})