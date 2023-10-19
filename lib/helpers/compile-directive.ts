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
        if (node.name === 'ytembed') {
          const data = node.data || (node.data = {});
          const attributes = node.attributes || {};
          const id = attributes.id;

          if (
            node.type === 'textDirective' ||
            node.type === 'containerDirective'
          ) {
            file.fail(
              'Unexpected :ytembed text directive or :::ytembed container directive, please use ::ytembed for a leaf directive.',
              node
            )
          }

          if (!id) {
            file.fail(
              'Expect `#id` on `::ytembed` directive: `::ytembed[Description]{#id}`.',
              node
            )
          }

          const hast = h(node.name, attributes === null ? undefined : attributes);
          data.hName = hast.tagName;
          data.hProperties = hast.properties;
          return;
        }
      }
    })
  }
}
