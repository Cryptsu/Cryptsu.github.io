import Style from "@/components/Style";
import BlinkingText from "@/components/BlinkingText";
import { theme } from "@/lib/styles/stiches.config";
import type { CSS } from "@stitches/react";

type PostDescriptionProps = {
  description?: string
}

const PostDescription = ({ description }: PostDescriptionProps) => {
  return (
    <>
      {
        description
          && 
          <>
            <Style style={PostDescriptionStyles}>
              {description}
            </Style>
          </>
      }
    </>
  )
}

const PostDescriptionStyles: CSS = {
  paddingBottom: "0.25em",

  color: theme.colors.textGeneral,
  fontSize: theme.fontSizes.h4,
  fontWeight: theme.fontWeights.h4,
  letterSpacing: theme.letterSpacings.h4,

  textDecoration: "underline",
  textAlign: "center",
  width: "75%", 

  whiteSpace: "pre-line",
}

export default PostDescription;
