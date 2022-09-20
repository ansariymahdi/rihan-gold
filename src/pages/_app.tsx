import {GlobalStyle, SwitchThemes} from "@styles/theme";
import {mediaQueries} from "@styles/theme/theme";
// import withGA from "next-ga";
import dynamic from "next/dynamic";
import Script from "next/script";
import Router, {useRouter} from "next/router";

import React, {useEffect} from "react";
import styled from "styled-components";
// import { Transltor } from "../language";
// import * as gtag from "../lib/gtag";
import "../styles/style.scss";
import "../styles/globals.css";

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 430,
//       md: 768,
//       lg: 1024,
//       xl: 1366,
//     },
//   },
// });

const App: React.FC<{
  Component: any;
  pageProps: any;
}> = ({Component, pageProps}) => {
  const router = useRouter();
  // const mdUp = useMediaQuery(mediaQueries.mdUp);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      // jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  // useEffect(() => {
  //   router.events.on("routeChangeComplete", pageview);
  //   return () => {
  //     router.events.off("routeChangeComplete", pageview);
  //   };
  // }, [router.events]);

  const removeGoftinoWidget = () => {
    // @ts-ignore
    Goftino.setWidget({
      hasIcon: false,
      counter: "#unread_counter",
    });
  };

  // useEffect(() => {
  //   if (!mdUp) {
  //     window.addEventListener("goftino_ready", removeGoftinoWidget);
  //   }

  //   return () =>
  //     window.removeEventListener("goftino_ready", removeGoftinoWidget);
  // }, [mdUp]);

  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      {/* {process.env.NODE_ENV === "development" ? null : (
        <>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${GTM_ID}');
        `,
            }}
          />
        </>
      )} */}

      <SwitchThemes>
        {/* <Transltor> */}
        {/* <MuiThemeProvider theme={theme}> */}
        <GlobalStyle />
        {/* </MuiThemeProvider> */}
        <Main>{getLayout(<Component {...pageProps} />)}</Main>

        {/* {mdUp || router.query.app === "true" ? null : (
              <MobileGoftinoWidget />
            )} */}
        {/* </Transltor> */}
      </SwitchThemes>
    </>
  );
};

export default App;
const Main = styled.div`
  /* Extra 20px for 10px padding on each side */
  width: 100vw;
  position: relative;
  flex-direction: column;
  display: flex;
`;
