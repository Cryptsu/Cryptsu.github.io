import { useReducer } from "react";
import { ContentContext } from "@/contexts/ContentContext";
import type { PropsWithChildren } from "react";
import type { HeadingInfoType} from "@/contexts/ContentContext"

type ContentProviderProps = PropsWithChildren<{}>;

const UpdateHeadingInfoReducerFn = (currentHeadingInfos: HeadingInfoType[], newHeadingInfo: HeadingInfoType) => {
  const findIndex = currentHeadingInfos.findIndex(
    (currentHeadingInfo) => 
      currentHeadingInfo.headingID === newHeadingInfo.headingID &&
      currentHeadingInfo.level === newHeadingInfo.level
  );

  if (findIndex === -1) {
    return [
      ...currentHeadingInfos, 
      newHeadingInfo
    ]
  }

  return currentHeadingInfos;
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

export default ContentProvider;