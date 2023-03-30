import { useReducer, useState } from "react";
import { ContentContext } from "@/contexts/ContentContext";

import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { HeadingInfoType, UpdateHeadingInfoReducerActionType } from "@/contexts/ContentContext"

type ContentProviderProps = PropsWithChildren<{}>;

const UpdateHeadingInfoReducerFn = (currentHeadingInfos: HeadingInfoType[], action: UpdateHeadingInfoReducerActionType) => {
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

const ContentProvider = ({children, ...otherProps}: ContentProviderProps) => {
  const [ headingInfos, UpdateHeadingInfoReducer ] = useReducer(UpdateHeadingInfoReducerFn, []);
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