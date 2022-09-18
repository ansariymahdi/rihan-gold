import { NO_LOCAL_STORAGE } from "@utils/main";
import React, { useContext, useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { breakpoints, createTheme } from "./theme";

const ThemeContext = React.createContext({
  isLightMode: true,
  themeHandler: () => {},
  direction: "rtl",
  directionHandler: () => {},
});

const ThemeContextProvider = (props) => {
  const storedTheme = !NO_LOCAL_STORAGE && localStorage.getItem("isLightMode"),
    storedDirection = !NO_LOCAL_STORAGE && localStorage.getItem("direction");

  const [mounted, setMounted] = useState(false);
  const [isLightMode, setIsLightMode] = useState(
    storedTheme === "false" ? false : true
  );
  const [screen, setScreen] = useState({});

  //to render theme again after mounting, beacause SSR prevents loading theme based on user's choice
  useEffect(() => {
    setMounted(true);
    const setScreenSize = () => {
      const screenWidth = window.innerWidth;
      const screens = {
        isMobile: false,
        isTablet: false,
        isLargeScreen: false,
        isDesktop: false,
        isExtraLarge: false,
        width: screenWidth,
      };
      if (screenWidth > breakpoints.xs && screenWidth < breakpoints.sm)
        setScreen({ ...screens, isMobile: true });
      else if (screenWidth > breakpoints.sm && screenWidth < breakpoints.md)
        setScreen({ ...screens, isTablet: true });
      else if (screenWidth > breakpoints.md && screenWidth < breakpoints.lg)
        setScreen({ ...screens, isLargeScreen: true, isDesktop: true });
      else if (screenWidth > breakpoints.lg && screenWidth < breakpoints.xl)
        setScreen({ ...screens, isDesktop: true, isExtraLarge: true });
      else setScreen({ ...screens, isDesktop: true, isExtraLarge: true });
    };

    window.addEventListener("resize", (e) => {
      // setScreenSize();
    });
    setScreenSize();
  }, []);

  const currentDirection = storedDirection === "ltr" ? "ltr" : "rtl",
    [direction, setDirection] = useState(currentDirection),
    themeMode = isLightMode ? "light" : "dark",
    theme = createTheme(themeMode, currentDirection);

  //handles dark/light theme and set it in localStorage
  const themeHandler = () => {
    const themeStatus = !isLightMode;
    setIsLightMode(themeStatus);
    localStorage.setItem("isLightMode", themeStatus);
  };

  //handles rtl/ltr and set it in localStorage
  const directionHandler = (dir) => {
    setDirection(dir);
    localStorage.setItem("direction", dir);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightMode,
        themeHandler,
        direction,
        directionHandler,
        theme,
        themeMode,
        screen,
      }}
    >
      {mounted ? (
        props.children
      ) : (
        // to make suer we'll show user's chosen theme
        <div style={{ visibility: "hidden" }}>{props.children}</div>
      )}
    </ThemeContext.Provider>
  );
};

const SwitchThemesCon = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const SwitchThemes = ({ children }) => (
  <ThemeContextProvider>
    <SwitchThemesCon>{children}</SwitchThemesCon>
  </ThemeContextProvider>
);

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    outline:none !important;
    -webkit-tap-highlight-color:  transparent !important;
    font-family: ${({ theme }) => theme.fontFamily} !important;
}

body{
  background-color: ${({ theme }) => theme.bgColors[1]};
}
p,div,span,input,section,form,label,ul,li,ol,h1,h2,h3,h4,h5,h6,nav{
  direction: ${({ theme }) => theme.dir} !important;
}

.notification-container-mobile-top{
  position: fixed;
  z-index: 999999999;
}

.notification-container-top-right{
  z-index: 999999999;
}

.react-notification-root {
  position: fixed;
  z-index: 500000;
}

.notification-item{
  border-radius: 8px;
  box-shadow: none;
}
`;
export { GlobalStyle, SwitchThemes, ThemeContext };
