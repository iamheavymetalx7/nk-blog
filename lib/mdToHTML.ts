import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import fs from "fs";

// Initialize Markdown-It with syntax highlighting
const md: any = new MarkdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="bg-gray-700 text-lg rounded-lg overflow-x-auto text-white"><code class="lang-${lang}">${
          hljs.highlight(str, { language: lang }).value
        }</code></pre>`;
      } catch (__) {}
    }
    return `<pre class="bg-gray-700 text-lg rounded-lg overflow-x-auto text-white"><code>${md.utils.escapeHtml(
      str
    )}</code></pre>`;
  },
});

// Convert Markdown to HTML
export default function convertMarkdownToHtml(markdown: string): string {
  let html = md.render(markdown);

  // Add Tailwind CSS classes to HTML elements
  html = html
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
    .replace(/<\/h1>/g, "</h1>")
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold mb-3">')
    .replace(/<\/h2>/g, "</h2>")
    .replace(/<h3>/g, '<h3 class="text-xl font-bold mb-2">')
    .replace(/<\/h3>/g, "</h3>")
    .replace(/<p>/g, '<p class="text-lg mb-4">')
    .replace(/<\/p>/g, "</p>")
    .replace(/<ul>/g, '<ul class="list-disc ml-6 space-y-2">')
    .replace(/<\/ul>/g, "</ul>")
    .replace(/<ol>/g, '<ol class="list-decimal ml-6 space-y-2">')
    .replace(/<\/ol>/g, "</ol>")
    .replace(/<a href="/g, '<a class="text-blue-600 underline" href="')
    .replace(/<\/a>/g, "</a>")
    .replace(/<code>/g, '<code class="bg-gray-100 text-blue-700 rounded px-1">')
    .replace(/<\/code>/g, "</code>");

  return html;
}
