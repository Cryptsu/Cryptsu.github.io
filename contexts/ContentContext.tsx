import { createContext } from "react";
import type { Context } from "react";

type ContentContextType = (
  Context<{
    headingIDs: {
      headingContent: string,
      headingID: string,
      level: number,
    }[];

    addHeadingID: (content: string, id: string, level: number) => void;
  }>
)

export const ContentContext: ContentContextType = createContext({
  headingIDs: [{
    headingContent: "",
    headingID: "",
    level: -1,
  }],

  addHeadingID(content, id, level) {
    
  },
})