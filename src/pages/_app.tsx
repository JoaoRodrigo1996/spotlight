import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../lib/dayjs";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
