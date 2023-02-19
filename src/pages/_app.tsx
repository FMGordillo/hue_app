import type { AppProps } from "next/app";
import { globalStyles } from "../styles";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}
