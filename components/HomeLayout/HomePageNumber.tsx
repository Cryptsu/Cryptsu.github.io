import Style from "@/components/Style";
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
      <Style
        style={currentPage > 0 ? HomePageNumberNavLeftStyles : HomePageNumberNavLeftInactiveStyles}
        elementName={HtmlConst.SPAN} 
        onClick={
          () => {
            decPageNumber();
          }
        }
      >
        {"<-"}
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

      <Style
        style={currentPage < noPages - 1 ? HomePageNumberNavRightStyles : HomePageNumberNavRightInactiveStyles}
        elementName={HtmlConst.SPAN} 
        onClick={
          () => {
            addPageNumber();
          }
        }
      >
        {"->"}
      </Style>
    </Style>
  )
}

const HomePageNumberStyles: CSS = {
  fontFamily: theme.fonts.global,
  userSelect: "none",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  gap: 8,
  paddingTop: 8,
  paddingBottom: 8,
};

const HomePageNumberItemSelectedStyles: CSS = {
  fontSize: theme.fontSizes.h4,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: theme.letterSpacings.h4,
}

const HomePageNumberItemNormalStyles: CSS = {
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
  '&:active': {
    transform: "translateY(4px)"
  }
}

const HomePageNumberItemStyles: CSS = {
  color: theme.colors.textLess,
  '&:hover': {
    color: theme.colors.textActive,
  }
}

const HomePageNumberNavLeftStyles: CSS = {
  color: theme.colors.prev,
  fontWeight: theme.fontWeights.bold,
  '&:hover': {
    color: theme.colors.prevActive,
  },
  '&:active': {
    transform: "translateY(4px)"
  }
}

const HomePageNumberNavLeftInactiveStyles: CSS = {
  color: theme.colors.prevInactive,
  fontWeight: theme.fontWeights.bold,
}

const HomePageNumberNavRightStyles: CSS = {
  color: theme.colors.next,
  fontWeight: theme.fontWeights.bold,
  '&:hover': {
    color: theme.colors.nextActive,
  },
  '&:active': {
    transform: "translateY(4px)"
  }
}

const HomePageNumberNavRightInactiveStyles: CSS = {
  color: theme.colors.nextInactive,
  fontWeight: theme.fontWeights.bold,
}

export default HomePageNumber;