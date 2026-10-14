import Style from "@/components/Style";
import Callout, { CalloutHeaderStyles } from ".";
import { PencilIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type NoteProps = PropsWithChildren<{
  title?: string;
}>;

const Note = ({ children, title, ...otherProps }: NoteProps) => (
  <Callout style={NoteStyles} {...otherProps}>
    {
      title
        ? <Style styles={[CalloutHeaderStyles, NoteHeaderStyles]}>
            <PencilIcon 
              width="1.5em"
              height="1.5em"
              style={{ 
                fill: theme.colors.note,
              }}
            />
            {title}
          </Style>
        : <></>
    }
    {children}
  </Callout>
);

const NoteStyles: CSS = {
  backgroundColor: theme.colors.noteBackground,
  borderColor: theme.colors.note,
};

const NoteHeaderStyles: CSS = {
  color: theme.colors.note,
};

export default Note;
