import { visit } from "unist-util-visit";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import { unified } from "unified";

function transformHtml() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "p") {
        node.properties.className = "text-xl";
      }
      if (node.tagName === "h3") {
        node.properties.id = "default-id";
      }
      // Add more rules here as needed
    });
  };
}

async function beautifyHtml(html) {
  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(transformHtml) // Apply custom transformations
    .use(rehypeFormat) // Format the HTML
    .use(rehypeStringify) // Convert back to string
    .process(html);

  return String(file);
}

export default beautifyHtml;
