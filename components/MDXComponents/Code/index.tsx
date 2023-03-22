import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import CodeInline from "./CodeInline";
import CodeBlock from "./CodeBlock";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeProps = PropsWithChildren<{
  className?: string;
}>

const Code = ({children, className, ...otherProps}: CodeProps) => {
  // TODO: This detection code is highly temporary.
  // In the future, the class names might be changed.
  const classNames = className?.split(' ');
  const isCodeBlock = (
    classNames?.includes("code-highlight")
  ) !== undefined;
  const isCodeBlockHighlighted = (
    classNames?.find(className => /language-*/.test(className))
  ) !== undefined;

  return (
    isCodeBlock
      ? <CodeBlock highlight={isCodeBlockHighlighted} {...otherProps}>
          {children}
        </CodeBlock>
      : <CodeInline {...otherProps}>
          {children}
        </CodeInline>
  )
}

export default Code;