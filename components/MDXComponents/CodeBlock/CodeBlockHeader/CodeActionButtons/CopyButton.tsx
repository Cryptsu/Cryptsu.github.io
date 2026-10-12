import { useState, useEffect } from "react";
import innerText from "react-innertext";
import copy from "copy-to-clipboard";
import Style from "@/components/Style";
import { ClipboardIcon, CheckIcon } from "@/components/Icons";
import { ClassConst } from "@/lib/consts";
import { theme } from "@/lib/styles/stitches.config";
import type { MouseEventHandler, ComponentPropsWithoutRef, ReactNode } from "react";
import type { CSS } from "@stitches/react";

type CopyButtonProps = ComponentPropsWithoutRef<typeof Style> & {
  style?: CSS,
  content: string | ReactNode,
  refreshTime?: number,
}

// Source code copied from Jarv.is's code.
const CopyButton = ({content, refreshTime = 2000, style, ...otherProps}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyFn: MouseEventHandler<HTMLButtonElement> = (e) => {
    // prevent unintentional double-clicks by unfocusing button
    e.currentTarget.blur();

    // send plaintext to the clipboard
    copy(innerText(content)).then(didCopy => {
      setCopied(didCopy);
    });
  };

  useEffect(() => {
    if (!copied)
      return;

    // reset to original icon after given ms (defaults to 2 seconds)
    const reset = setTimeout(() => {
      setCopied(false);
    }, refreshTime);

    // cancel refreshTime to avoid memory leaks if unmounted in the middle of this
    return () => {
      clearTimeout(reset);
    };
  }, [refreshTime, copied]);

  return (
    <Style 
      className={ClassConst.CLASS_CODEBLOCK_BTN}
      css={style}
      style={CopyButtonStyles} 
      onClick={handleCopyFn}
      {...otherProps}
    > 
      {
        copied
          ? <CheckIcon style={CopiedIconStyles} />
          : <ClipboardIcon viewBox={"0 0 7 8"} style={CopyIconStyles}/>
      }
    </Style>
  )
}

const CopyButtonStyles: CSS = {
  borderRadius: "8px !important",
  borderWidth: "0.125em",
  borderStyle: "dashed !important",
  borderColor: theme.colors.next,
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.buttonHoverBackground,
      cursor: "pointer",
    },
  },
  '&:active': {
    backgroundColor: theme.colors.next,
  },

  // Size of button!
  width: "1.5em",
  height: "1.5em",

  // Center a div...
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const CopyIconStyles: CSS = {
  fill: theme.colors.iconGeneral,
  width: '0.75em',
  height: '0.75em',
}

const CopiedIconStyles: CSS = {
  fill: theme.colors.success,
  width: '0.75em',
  height: '0.75em',
}

export default CopyButton;
