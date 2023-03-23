// export { default as h1 } from "./Headings/H1";
// export { default as h2 } from "./Headings/H2";
// export { default as h3 } from "./Headings/H3";
// export { default as h4 } from "./Headings/H4";
// export { default as h5 } from "./Headings/H5";
// export { default as h6 } from "./Headings/H6";

// export { default as p } from "./Paragraph";
// export { default as blockquote } from "./Blockquote";
// export { default as code } from "./Code";
// export { default as a } from "./ParsedLink";

import Style from "@/components/Style";
import MDXComponentsConfig from "@/lib/config/mdx.config";
import type { MDXComponentsConfigType } from "@/lib/config/mdx.config";
import type { MDXRemoteProps } from "next-mdx-remote";
import React from "react";

const compileComponents = (MDXComponentsConfig: MDXComponentsConfigType) => {
  let mdxComponents: MDXRemoteProps["components"] = {};
  for (let componentName of Object.keys(MDXComponentsConfig)) {
    mdxComponents[componentName] = ({children, ...otherProps}) => {
      return (
        <Style as={MDXComponentsConfig[componentName][0].replacedElement} {...otherProps}>
          {children}
        </Style>
      )
    };
    console.log(mdxComponents[componentName].toString())
  }
  return mdxComponents;
}

export default compileComponents(MDXComponentsConfig);