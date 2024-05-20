import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
