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

const CompileComponentsConfig 
  = (MDXComponentsConfig: MDXComponentsConfigType)
  : MDXRemoteProps["components"] => 
{
  let mdxComponents: MDXRemoteProps["components"] = {};
  for (let componentName of Object.keys(MDXComponentsConfig)) {
    mdxComponents[componentName] = ({children, className, ...otherProps}) => {
      // Get all classnames
      const classNames = (
        className 
          ? className.split(' ') 
          : []
      );

      for (let replaceConfig of MDXComponentsConfig[componentName]) {
        // If no additional class are provided, return
        if (!replaceConfig.classNames)
          return (
            <Style 
              as={replaceConfig.replacedElement} 
              className={className}
              {...otherProps}
            >
              {children}
            </Style>
          )

        // If additonal classes are provided, then cross check.
        let existMatch = true;
        for (let configClassName of replaceConfig.classNames) {
          if (!classNames.includes(configClassName)) {
            existMatch = false;
            break;
          }
        }

        // If match, return
        if (existMatch) {
          return (
            <Style 
              as={replaceConfig.replacedElement} 
              className={className}
              {...otherProps}
            >
              {children}
            </Style>
          )
        }
      }
      
      // Default value if there is no replacement yet...
      return (
        <Style elementName={componentName} className={className} {...otherProps}>
          {children}
        </Style>
      )
    };
  }
  return mdxComponents;
}

export default CompileComponentsConfig(MDXComponentsConfig);