import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import { HtmlConst } from "@/lib/consts";
import type { Root } from "mdast";
import type { VFile } from "vfile";

export function customRemarkDirective() {
  return (tree: Root, file: VFile) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) 
      {
        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};
        const hast = h(node.name, attributes === null ? undefined : attributes);

        ////////////////////////////////////////////////////////////////////////////////////////////
        //    :code[Some text or HTML here]
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (node.name === 'code') {
          if (
            node.type === 'leafDirective' ||
            node.type === 'containerDirective'
          ) {
            file.fail(
              'Unexpected ::code leaf directive or :::code container directive, please use :code for a text directive.',
              node
            )
          }

          data.hName = hast.tagName;
          data.hProperties = hast.properties;
          return;
        }

        ////////////////////////////////////////////////////////////////////////////////////////////
        //    ::ytembed[Some Description]{#video-id}
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (node.name === 'ytembed') {
          if (
            node.type === 'textDirective' ||
            node.type === 'containerDirective'
          ) {
            file.fail(
              'Unexpected :ytembed text directive or :::ytembed container directive, please use ::ytembed for a leaf directive.',
              node
            )
          }

          if (!attributes.id) {
            file.fail(
              'Expect `#id` on `::ytembed` directive: `::ytembed[Description]{#id}`.',
              node
            )
          }

          data.hName = hast.tagName;
          data.hProperties = hast.properties;
          return;
        }
      }
    })
  }
}
