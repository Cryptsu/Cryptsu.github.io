import { createContext } from "react";
import type { Context, Dispatch, ReactNode, RefObject } from "react";

export type HeadingInfoType = {
  headingContent: string | ReactNode,
  headingID: string,
  cmpViewPort: number,
  level: number,
}

export type UpdateHeadingInfoReducerActionType = {
  name: "set" | "updateVisibility",
  data: HeadingInfoType
}

type ContentContextType = (
  Context<{
    headingInfos: HeadingInfoType[];
    UpdateHeadingInfoReducer: Dispatch<UpdateHeadingInfoReducerActionType>;
  }>
)

export const ContentContext: ContentContextType = createContext({
  headingInfos: [] as HeadingInfoType[],
  UpdateHeadingInfoReducer: (action: UpdateHeadingInfoReducerActionType) => {}
})