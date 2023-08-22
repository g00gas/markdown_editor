import type { AppProps } from "next/app";
import React from "react";
import { Inter } from "next/font/google";

import "../styles/global.css";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
