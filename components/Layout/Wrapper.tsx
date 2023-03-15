import { theme } from "@/lib/styles/stiches.config";
import { styled } from "@stitches/react";

const Wrapper = styled("div", 
  {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",

    background: theme.colors.pageBackground,
  }
)

export default Wrapper;