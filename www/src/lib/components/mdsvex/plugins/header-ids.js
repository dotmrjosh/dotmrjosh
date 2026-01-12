// @ts-check

import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";

/** @typedef {import ("unified").Plugin<[], any>} RemarkPlugin */

/**
 * Minimal shape we need for headings in mdsvex.
 * mdsvex forwards `node.data.hProperties` onto the rendered HTML element.
 * @typedef {{
 *   data?: {
   *     hProperties?: (Record<string, unknown> & { id?: string })
   *
  }
 *
}} HeadingNode
*/

/** @type {RemarkPlugin} */
export default function headerIds() {
  return (tree) => {
    visit(
      tree,
      "heading",
      (node) => {
        const value = toString(node);

        node.data ??= {};
        node.data.hProperties ??= {};
        node.data.hProperties.id = value.trim().replace(/\s+/g, "-");
      },
    );
  };
}
