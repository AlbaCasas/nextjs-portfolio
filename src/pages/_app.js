import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alba Casas</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Mulish:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="image"
          property="og:image"
          content="/public/portfolio-logo.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Portfolio;
