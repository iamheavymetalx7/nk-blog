import DOMPurify from "dompurify";
import { parse, Node, DomHandler as DomHandlerType } from "htmlparser2";
import { DomHandler as DomHandlerType } from "domhandler";

// Utility function to preprocess HTML
export function preprocessHtml(html: string): string {
  // Sanitize the HTML content
  const sanitizedHtml = DOMPurify.sanitize(html);

  // Create a handler to process the HTML
  const handler = new DomHandlerType((error: Error | null, dom: Node[]) => {
    if (error) {
      console.error("Error parsing HTML:", error);
      return;
    }

    // Traverse and modify the HTML
    const traverseDom = (node: Node) => {
      if (node.type === "tag") {
        // Add classes to specific elements
        if (node.name === "p") {
          node.attribs = {
            ...node.attribs,
            class: (node.attribs.class || "") + " text-lg",
          };
        } else if (node.name === "h3") {
          node.attribs = {
            ...node.attribs,
            class: (node.attribs.class || "") + " mt-4 mb-2 text-2xl font-bold",
          };
        } else if (node.name === "pre") {
          node.attribs = {
            ...node.attribs,
            class:
              (node.attribs.class || "") +
              " bg-gray-700 text-lg rounded-lg overflow-x-auto text-white mt-2 mb-2",
          };
        } else if (node.name === "code") {
          node.attribs = {
            ...node.attribs,
            class:
              (node.attribs.class || "") +
              " bg-gray-100 text-blue-700 rounded px-1",
          };
        } else if (node.name === "ul") {
          node.attribs = {
            ...node.attribs,
            class: (node.attribs.class || "") + " list-disc ml-6 space-y-2",
          };
        } else if (
          node.name === "div" &&
          node.attribs?.class?.includes("bg-blue-50")
        ) {
          node.attribs = {
            ...node.attribs,
            class:
              (node.attribs.class || "") +
              " border-l-4 border-blue-500 p-4 mt-6",
          };
        }

        // Recursively traverse child nodes
        if (node.children) {
          node.children.forEach(traverseDom);
        }
      }
    };

    dom.forEach(traverseDom);
  }) as DomHandlerType;

  // Parse the sanitized HTML
  parse(sanitizedHtml, handler);

  // Convert the modified DOM back to HTML
  return handler.dom.map((node) => (node as any).toString()).join("");
}
