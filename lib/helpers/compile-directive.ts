import { visit } from "unist-util-visit";
import { h } from "hastscript";
import { DirectivesConfig } from "@/lib/config/directive.config";
import type { Root } from "mdast";
import type { VFile } from "vfile";

const MARKERS = {
  textDirective: ":",
  leafDirective: "::",
  containerDirective: ":::",
};

export function customRemarkDirective() {
  return (tree: Root, file: VFile) => {
    visit(tree, (node) => {
      if (
        node.type !== "textDirective" &&
        node.type !== "leafDirective" &&
        node.type !== "containerDirective"
      )
        return;

      const selector = MARKERS[node.type] + node.name;
      if (!(selector in DirectivesConfig)) return;

      const spec = DirectivesConfig[selector];
      const requiredAttributes = spec.requireAttributes
        ? spec.requireAttributes
        : [];
      const allowedAttributes = spec.allowedAttributes
        ? spec.allowedAttributes
        : [];

      const attributes = node.attributes || {};
      for (const attribute of Object.keys(attributes)) {
        if (!allowedAttributes.includes(attribute)) {
          file.fail(`Unexpected attribute "${attribute}" for ${selector}.`);
        }
      }

      for (const requiredAttribute of requiredAttributes) {
        if (!(requiredAttribute in attributes)) {
          file.fail(
            `Missing required attribute "${requiredAttribute}" for ${selector}.`,
          );
        }
      }

      const data = node.data || (node.data = {});
      const hast = h(node.name, attributes);

      // if no tagName is specified, get straight from the
      // directive tag name.
      data.hName = spec.tagName ? spec.tagName : hast.tagName;
      data.hProperties = hast.properties;
    });
  };
}
