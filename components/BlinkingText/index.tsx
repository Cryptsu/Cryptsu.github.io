import { useEffect, useState } from "react";
import Style from "@/components/Style";
import { keyframes, theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlinkingTextProps = PropsWithChildren<{
  text: string,
  blinkColor?: string,
}>

const BlinkingText = ({children, text, blinkColor, ...otherProps}: BlinkingTextProps) => {
  const [ currentText, setCurrentText ] = useState<string>("");
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);
  const [ updateFlipFlop, setUpdateFlipFlop ] = useState<boolean>(false);
  
  useEffect(() => {
    if (currentIndex >= text.length)
      return;

    const timeout = setTimeout(() => {
      setUpdateFlipFlop(!updateFlipFlop);
    }, Math.random() * 100);

    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    if (Math.random() < 0.1)
      return;
    setCurrentIndex(currentIndex + 1);
  /* eslint-disable react-hooks/exhaustive-deps */}, [updateFlipFlop]);

  useEffect(() => {
    if (currentIndex >= text.length)
      return;
    setCurrentText(currentText + text[currentIndex])
  /* eslint-disable react-hooks/exhaustive-deps */}, [currentIndex]);

  return (
    <Style {...otherProps}>
      {currentText}
      <Style style={BlinkingCharStyles} css={{color: blinkColor}} elementName={HtmlConst.SPAN}>
        {TxtConst.TXT_BLINK_CHAR}
      </Style>
    </Style>
  )
}

const BlinkingCharStyles: CSS = {
  animation: `${keyframes({
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  })} 1.5s infinite ease-in-out`
};

export default BlinkingText;