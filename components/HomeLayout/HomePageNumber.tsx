import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { AppConfig } from "@/lib/config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type HomePageNumberProps = PropsWithChildren<{
  currentPage: number,
  setCurrentPage: (newPageNumber: number) => void,
  noPosts: number,
}>

const HomePageNumber = ({children, currentPage, setCurrentPage, noPosts, ...otherProps}: HomePageNumberProps) => {
  const noPages = Math.ceil(noPosts / AppConfig.HOME_POSTS_PER_PAGE);
  return (
    <Style style={HomePageNumberStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const HomePageNumberStyles: CSS = {
  fontFamily: theme.fonts.global,
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

export default HomePageNumber;