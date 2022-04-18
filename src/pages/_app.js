import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alba Casas</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Portfolio;
