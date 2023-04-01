import { useEffect, useState } from "react";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlinkingTextProps = PropsWithChildren<{
  text: string
}>

const BlinkingText = ({children, text, ...otherProps}: BlinkingTextProps) => {
  const [ currentText, setCurrentText ] = useState<string>("");
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (currentText[currentText.length - 1] === TxtConst.TXT_BLINK_CHAR)
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, currentText.length - 1));
      }, 500)

    else if (currentIndex >= text.length || Math.random() < 0.1)
      timeout = setTimeout(() => {
        setCurrentText(currentText + TxtConst.TXT_BLINK_CHAR);
      }, 500)
    
    else
      timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, Math.random() * 100);

    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    if (currentIndex >= text.length)
      return;
    setCurrentText(currentText + text[currentIndex])
  }, [currentIndex])

  return (
    <>
      {currentText}
    </>
  )
}

export default BlinkingText;