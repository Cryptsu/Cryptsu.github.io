import { createContext } from "react";
import type { Context, Dispatch, ReactNode, RefObject } from "react";

export type HeadingInfoType = {
  headingContent: string | ReactNode,
  headingID: string,
  headingRef: RefObject<HTMLElement>,
  level: number,
}

export type UpdateHeadingInfoReducerActionType = {
  name: "append" | "updateVisibility",
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