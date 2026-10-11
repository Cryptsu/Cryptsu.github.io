import { useState } from "react";
import Style from "@/components/Style";
import TableOfContent from "./TableOfContent";
import TOCToggleBtn from "./TOCToggleBtn";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TableOfContentWrapperProps = PropsWithChildren<{
  style?: CSS
}>

// Gotta put it inside here so that useState
// does not re-render the whole layout during
// update :>
const TableOfContentWrapper = ({ style={} }: TableOfContentWrapperProps) => {
  const [ showTOCMobile, setShowTOCMobile ] = useState<boolean>(false);

  return (
    <>
      <Style styles={[TableOfContentWrapperStyles, style]} 
        css={
          showTOCMobile
            ? TableOfContentMobileStyles
            : TableOfContentDesktopStyles
        }
      >
        <TableOfContent
          style={TableOfContentPositionalStyles}
          css={{
            '@larger': {
              display: showTOCMobile 
                ? "" 
                : "none",
            }
          }}
        />
      </Style>

      <TOCToggleBtn 
        showTOCMobile={showTOCMobile} 
        onClick={() => {setShowTOCMobile(!showTOCMobile)}}
      />
    </>
  )
}

const TableOfContentWrapperStyles: CSS = {
  zIndex: theme.zIndices.tocBackground,
  '@larger': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const TableOfContentMobileStyles: CSS = {
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
};

const TableOfContentDesktopStyles: CSS = {
  height: "100%",
};

const TableOfContentPositionalStyles: CSS = {
  position: "sticky",
  top: 96,
  width: "110%",
  maxHeight: `calc((100vh - 96px) * 0.9)`,
  maxWidth: "min(calc(110% - 32px), 320px)",
  marginLeft: "min(20%, 96px)",

  '@larger': {
    position: "fixed",
    width: "50vw",
    maxWidth: "20em",
    top: "5vh",
    bottom: "10vh",
    maxHeight: "80vh",
    marginLeft: "1em",
    marginRight: "1em",
  }
};

export default TableOfContentWrapper;
