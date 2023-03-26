import { useState, useEffect } from "react";
import innerText from "react-innertext";
import copy from "copy-to-clipboard";
import Style from "@/components/Style";
import Button from "@/components/Button";
import { ClipboardIcon, CheckIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
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
    const didCopy = copy(innerText(content));

    // indicate success
    setCopied(didCopy);
  };

  useEffect(() => {
    if (!copied) {
      return;
    }

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
      css={style}
      as={Button} 
      style={CopyButtonStyles} 
      onClick={handleCopyFn}
      {...otherProps}
    > 
      {
        copied
          ? <CheckIcon style={CopiedIconStyles} />
          : <ClipboardIcon style={CopyIconStyles}/>
      }
    </Style>
  )
}

const CopyButtonStyles: CSS = {
  borderColor: theme.colors.copyBtnBorder,
  boxShadow: theme.shadows.codeCopyBtnNormal,
  '&:active': {
    backgroundColor: theme.colors.copyBtnHoverBackground,
    boxShadow: theme.shadows.codeCopyBtnClick,
  },

  // Size of button!
  width: 24,
  height: 24,

  // Center a div...
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const CopyIconStyles: CSS = {
  fill: theme.colors.copyIcon,
  width: 12,
  height: 12,
}

const CopiedIconStyles: CSS = {
  fill: theme.colors.copiedIcon,
  width: 12,
  height: 12,
}

export default CopyButton;