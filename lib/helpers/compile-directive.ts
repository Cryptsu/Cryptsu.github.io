import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import { HtmlConst } from "@/lib/consts";
import type { Root } from "mdast";

export function customRemarkDirective() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) 
      {
        // 
        const data = node.data || (node.data = {});
        const hast = h(node.name, node.attributes === null ? undefined : node.attributes);
        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    })
  }
}
