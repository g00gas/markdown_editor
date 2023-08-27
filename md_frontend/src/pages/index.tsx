import React from "react";
import MainPage from "../components/MainPage/MainPage";
import { MarkdownProvider } from "../context/MarkdownContext";

export default function Page() {
  return (
    <MarkdownProvider>
      <MainPage />
    </MarkdownProvider>
  );
}
