import { useRef } from "react";
import useContent from "@/hooks/useContent";
import useOnce from "@/hooks/useOnce";
import Style from "@/components/Style";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TagProps = PropsWithChildren<{
  id: string;
}>;

const Tag = ({ id, children, ...otherProps }: TagProps) => {
  const tagRef = useRef<HTMLElement>(null);
  const { UpdateTagInfoReducer } = useContent();

  useOnce(() => {
    UpdateTagInfoReducer({
      tagID: id,
      tagRef: tagRef,
    });
  }, []);

  return (
    <>
      <Style
        style={TagSelectStyles}
        ref={tagRef}
        id={id}
      />
      {children}
    </>
  );
};

const TagSelectStyles: CSS = {
  position: "absolute",
  top: "-6rem",
  '@medium': {
    top: "-0.5rem",
  }
}

export default Tag;
