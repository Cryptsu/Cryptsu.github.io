import React from "react";
import Style from "@/components/Style";
import MDXComponentsConfig from "@/lib/config/mdx.config";
import type { MDXComponentsConfigType } from "@/lib/config/mdx.config";
import type { MDXRemoteProps } from "next-mdx-remote";

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
        // If additonal classes are provided, then cross check.
        let existMatch = true;
        if (replaceConfig.classNames)
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