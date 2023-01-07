// General
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

// Styles
import GlobalStyle from "../styles/Global/Reset.style";

// Components
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div key={router.route}>
          <GlobalStyle />
          {pathname !== "/[project]" && <Navbar />}
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
