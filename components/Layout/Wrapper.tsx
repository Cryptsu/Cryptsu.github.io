import { AssetsConst } from "@/lib/consts";
import { theme } from "@/lib/styles/stiches.config";
import { styled } from "@stitches/react";

const Wrapper = styled("div", 
  {
    // Spans the whole window
    // display: "flex",
    // flexDirection: "column",
    minHeight: "100vh",

    background: theme.colors.pageBackground,
    backgroundImage: `url("${AssetsConst.GRAIN_PNG}")`,
  }
)

export default Wrapper;