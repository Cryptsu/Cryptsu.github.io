import Style from "@/components/Style";
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
            <hr/>
            <Style style={PostDescriptionStyles}>
              {description}
            </Style>
            <hr/>
          </>
      }
    </>
  )
}

const PostDescriptionStyles: CSS = {
  paddingTop: "0.5em",
  paddingBottom: "0.5em",
}

export default PostDescription;
