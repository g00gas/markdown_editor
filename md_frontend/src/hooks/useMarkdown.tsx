import { useContext } from "react";
import { MarkdownContext } from "../context/MarkdownContext";

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);

  if (context === undefined) {
    throw new Error("Markdown context has returned undefined");
  }
  return context;
};
