import Style from "@/components/Style";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
import { AppConfig } from "@/lib/config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type HomePageNumberProps = PropsWithChildren<{
  currentPage: number,
  setCurrentPage: (newPageNumber: number) => void,
  noPosts: number,
}>

const HomePageNumber = ({children, currentPage, setCurrentPage, noPosts, ...otherProps}: HomePageNumberProps) => {
  const noPages: number = Math.ceil(noPosts / AppConfig.HOME_POSTS_PER_PAGE);
  if (currentPage >= noPages || currentPage < 0)
    return (
      <Style style={HomePageNumberStyles} {...otherProps}>
        {TxtConst.TXT_Y_U_HACK_PAGE_NUMBER}
      </Style>
    )

  const setPageNumber = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < noPages)
      setCurrentPage(pageNumber)
  }

  const addPageNumber = () => {
    if (currentPage < noPages - 1)
      setCurrentPage(currentPage + 1)
  }

  const decPageNumber = () => {
    if (currentPage > 0)
      setCurrentPage(currentPage - 1)
  }

  let pageNums: (number | '...')[] = [];
  if (currentPage - 1 > 0)
    pageNums.push(0)
  if (currentPage - 1 > 1)
    pageNums.push('...')
  for (let pageNum = Math.max(currentPage - 1, 0); pageNum <= Math.min(currentPage + 1, noPages - 1); ++pageNum)
    pageNums.push(pageNum);
  if (currentPage + 1 < noPages - 2)
    pageNums.push('...')
  if (currentPage + 1 < noPages - 1)
    pageNums.push(noPages - 1);

  return (
    <Style style={HomePageNumberStyles} {...otherProps}>
      <Style style={HomePageNumberNavLeftWrapperStyles}>
        <Style
          style={currentPage > 0 ? HomePageNumberNavLeftStyles : HomePageNumberNavLeftInactiveStyles}
          as={ArrowLeftIcon}
          onClick={
            () => {
              decPageNumber();
            }
          }
        />
      </Style>
      {
        pageNums.map(
          (pageNum) => (
            <Style 
              key={pageNum} 
              css={pageNum === currentPage ? HomePageNumberItemSelectedStyles: HomePageNumberItemNormalStyles}
              style={HomePageNumberItemStyles} 
              elementName={HtmlConst.SPAN} 
              onClick={
                () => {
                  if (typeof pageNum === 'number')
                    setPageNumber(pageNum) 
                }
              }
            >
              {pageNum}
            </Style>
          )
        )
      }

      <Style style={HomePageNumberNavRightWrapperStyles}>
        <Style 
          style={currentPage < noPages - 1 ? HomePageNumberNavRightStyles : HomePageNumberNavRightInactiveStyles}
          as={ArrowRightIcon}
          onClick={
            () => {
              addPageNumber();
            }
          }
        />
      </Style>
    </Style>
  )
}

// ================================ HOME PAGE NUMBERS ================================
const HomePageNumberStyles: CSS = {
  fontFamily: theme.fonts.global,
  userSelect: "none",

  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  '&::before, &::after': {
    content: " ",
    margin: "auto",
  },

  gap: "1em",
  paddingTop: "0.5em",
  paddingBottom: "0.5em",
  
  overflowX: "auto",
  maxWidth: "100vw",
};

const HomePageNumberItemSelectedStyles: CSS = {
  fontSize: theme.fontSizes.h3,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: theme.letterSpacings.h3,
}

const HomePageNumberItemNormalStyles: CSS = {
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
  '&:active': {
    transform: "translateY(0.25em)",
  },

  borderWidth: "0.25em",
  borderStyle: "dashed",
  borderColor: "#00000000",
  '@media (hover: hover)': {
    '&:hover': {
      borderColor: theme.colors.borderGeneral,
    }
  },
}

const HomePageNumberItemStyles: CSS = {
  paddingLeft: "0.25em",
  paddingRight: "0.25em",
  color: theme.colors.textLess,
  '@media (hover: hover)': {
    '&:hover': {
      color: theme.colors.textActive,
    }
  }
}

// ================================ HOME PAGE NAVLEFT ================================

const HomePageNumberNavLeftWrapperStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const HomePageNumberNavLeftStyles: CSS = {
  width: "1.5em",
  height: "1.75em",
  fill: theme.colors.prev,
  fontWeight: theme.fontWeights.bold,

  paddingLeft: "0.25em",
  paddingRight: "0.25em",
  borderWidth: "0.25em",
  borderStyle: "dashed",
  borderColor: "#00000000",
  '@media (hover: hover)': {
    '&:hover': {
      fill: theme.colors.prevActive,
      borderColor: theme.colors.borderGeneral,
    },
  },

  '&:active': {
    transform: "translateY(4px)"
  },
}

const HomePageNumberNavLeftInactiveStyles: CSS = {
  width: "1.5em",
  height: "1.75em",
  fill: theme.colors.prevInactive,
  fontWeight: theme.fontWeights.bold,
  paddingLeft: "0.25em",
  paddingRight: "0.25em",
}


// ================================ HOME PAGE NAVRIGHT ================================

const HomePageNumberNavRightWrapperStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const HomePageNumberNavRightStyles: CSS = {
  width: "1.5em",
  height: "1.75em",
  fill: theme.colors.next,
  fontWeight: theme.fontWeights.bold,

  paddingLeft: "0.25em",
  paddingRight: "0.25em",
  borderWidth: "0.25em",
  borderStyle: "dashed",
  borderColor: "#00000000",
  '@media (hover: hover)': {
    '&:hover': {
      color: theme.colors.nextActive,
      borderColor: theme.colors.borderGeneral,
    },
  },

  '&:active': {
    transform: "translateY(4px)"
  },
}

const HomePageNumberNavRightInactiveStyles: CSS = {
  width: "1.5em",
  height: "1.75em",
  fill: theme.colors.nextInactive,
  fontWeight: theme.fontWeights.bold,
  paddingLeft: "0.25em",
  paddingRight: "0.25em",
}

export default HomePageNumber;