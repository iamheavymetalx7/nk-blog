import { visit } from "unist-util-visit";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import { unified } from "unified";
import rehypePrism from "rehype-prism-plus"; // Add syntax highlighting support

async function beautifyHtml(html) {
  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypePrism) // Add syntax highlighting support
    .use(transformHtml) // Apply custom transformations
    .use(rehypeFormat) // Format the HTML
    .use(rehypeStringify) // Convert back to string
    .process(html);

  return String(file);
}

function transformHtml() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (
        node.tagName === "h1" ||
        node.tagName === "h2" ||
        node.tagName === "h3"
      ) {
        // Ensure heading elements have an ID
        const id =
          node.properties.id ||
          node.children
            .filter((child) => child.type === "text")
            .map((textNode) => textNode.value)
            .join("")
            .replace(/\s+/g, "-")
            .toLowerCase();

        // Set ID for the heading if not already present
        node.properties.id = id;

        // Create the link element with 🔗 symbol
        const link = {
          type: "element",
          tagName: "a",
          properties: {
            href: `#${id}`,
            className: ["heading-link"],
          },
          children: [{ type: "text", value: "🔗 " }],
        };

        // Prepend the link to the heading
        node.children.unshift(link);
      }

      // Apply custom styles
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

export default beautifyHtml;
