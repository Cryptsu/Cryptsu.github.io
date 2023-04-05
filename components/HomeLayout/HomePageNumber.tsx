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
      {
        pageNums.map(
          (pageNum) => (
            <Style key={pageNum} style={HomePageNumberItemStyles} elementName={HtmlConst.SPAN} onClick={() => {console.log('clicked')}}>
              {pageNum}
            </Style>
          )
        )
      }
    </Style>
  )
}

const HomePageNumberStyles: CSS = {
  fontFamily: theme.fonts.global,
  userSelect: "none",
  display: "flex",
  gap: 8,

  '&:before': {
    content: '<-',
    color: theme.colors.prev,
    fontWeight: theme.fontWeights.bold,
  },
  '&:after': {
    content: '->',
    color: theme.colors.next,
    fontWeight: theme.fontWeights.bold,
  }
};

const HomePageNumberItemStyles: CSS = {
  
}

export default HomePageNumber;