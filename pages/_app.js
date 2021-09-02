import "bootstrap/dist/css/bootstrap.css";
import GlobalStyle from "../styles/globalStyle";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://viessmann.vercel.app/images/favicon.ico"
        />
        <title>Viessmann</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
