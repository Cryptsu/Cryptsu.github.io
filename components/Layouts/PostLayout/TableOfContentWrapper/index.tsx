import { useState } from "react";
import Style from "@/components/Style";
import TableOfContent from "./TableOfContent";
import TOCToggleBtn from "./TOCToggleBtn";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TableOfContentWrapperProps = PropsWithChildren<{

}>

// Gotta put it inside here so that useState
// does not re-render the whole layout during
// update :>
const TableOfContentWrapper = ({children, ...otherProps}: TableOfContentWrapperProps) => {
  const [ showTOCMobile, setShowTOCMobile ] = useState<boolean>(false);

  return (
    <>
      <Style style={TableOfContentWrapperStyles} 
        css={
          showTOCMobile
            ? {
                height: "100%",
                '@larger': {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",

                  backdropFilter: "blur(4px)",
                  backgroundColor: theme.colors.tocBlur,
                }
              }
            : {
                height: "100%",
              }
        }
      >
        <TableOfContent
          css={{
            position: "sticky",
            top: 96,
            width: "110%",
            maxHeight: `calc((100vh - 96px) * 0.9)`,
            maxWidth: "min(calc(110% - 32px), 320px)",
            marginLeft: "min(20%, 96px)",

            '@larger': {
              position: "fixed",
              display: showTOCMobile 
                ? "" 
                : "none",

              width: "50vw",
              maxWidth: 320,
              top: "10vh",
              bottom: "10vh",
              maxHeight: "80vh",
              marginLeft: 16,
              marginRight: 16,
            }
          }}
        />
      </Style>
      <TOCToggleBtn showTOCMobile={showTOCMobile} onClick={() => {setShowTOCMobile(!showTOCMobile)}}/>
    </>
  )
}

const TableOfContentWrapperStyles: CSS = {
  zIndex: theme.zIndices.tocBackground,
  '@larger': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};

export default TableOfContentWrapper;