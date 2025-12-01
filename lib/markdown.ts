import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  linkify: true,
  breaks: true,
});

export function renderMarkdownToHtml(markdown: string | null | undefined) {
  if (!markdown) return "";
  return md.render(markdown);
}


