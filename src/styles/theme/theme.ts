import { css } from "styled-components";

export const breakpoints = {
  xs: 0,
  sm: 430,
  md: 768,
  lg: 1024,
  xl: 1366,
};

export const mediaQueries = {
    xsDown: `@media only screen and (max-width: ${breakpoints.xs}px)`,
    xsUp: `@media only screen and (min-width: ${breakpoints.xs}px)`,

    smDown: `@media only screen and (max-width: ${breakpoints.sm}px)`,
    smUp: `@media only screen and (min-width: ${breakpoints.sm}px)`,

    mdDown: `@media only screen and (max-width: ${breakpoints.md}px)`,
    mdUp: `@media only screen and (min-width: ${breakpoints.md}px)`,

    lgDown: `@media only screen and (max-width: ${breakpoints.lg}px)`,
    lgUp: `@media only screen and (min-width: ${breakpoints.lg}px)`,

    xlDown: `@media only screen and (max-width: ${breakpoints.xl}px)`,
    xlUp: `@media only screen and (min-width: ${breakpoints.xl}px)`,

    "560_up": `@media only screen and (min-width: 560px)`,
    "560_down": `@media only screen and (max-width: 560px)`,

    xsUpAndSmDown: `@media only screen and (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px)`,
    smUpAndMdDown: `@media only screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px)`,
    mdUpAndLgDown: `@media only screen and (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px)`,
    lgUpAndXlDown: `@media only screen and (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px)`,
  },
  common = {
    // fontFamily: "IRANSansX",

    fontFamily: "IRANYekan",
    borderRadius: "6px",
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    centerX: css`
      display: flex;
      justify-content: center;
    `,
    centerY: css`
      display: flex;
      align-items: center;
    `,
    button: css`
      border-radius: 4px;
      cursor: pointer;
    `,
    ...mediaQueries,
  };

export const newTheme = {
  ...common,
  white: "#fff",
  bgColors: {
    1: "#FDFEFF",
    2: "#E6EBEB",
    3: "#FAFCFF",
    4: "#494D4D",
  },
  primaryColors: {
    primary: "#063137",
    accent: "#BEA064",
  },
  neutralColors: {
    primary: "#191A1A",
    secondary: "#4B4D4D",
    tertiary: "#7A8080",
    quaternary: "#C8CCCC",
    fifth: "#F2F5F5",
  },
  semanticColors: {
    danger: "#D85140",
    warning: "#DF9132",
    success: "#009B87",
    info: "#3D6B99",
  },
  semanticColorsOpacity: {
    danger: "#FBEFED",
    warning: "#FBF3EC",
    success: "#E7F5F5",
    info: "#E7F1FD",
  },
  shadeColors: {
    100: "#66CCBE",
    200: "#00B89F",
    300: "#00A38D",
    400: "#009B87",
    500: "#008F7C",
    600: "#006658",
    700: "#005247",
  },
};

export const lightTheme = {
    ...common,
    components: {
      backgroundColor: "#F5F6F6",
      disabledButton: "#EBEDF0",
      // navbar: "#0f1835",
      navbar: "#111833",
      navbarOpen: "#282E49",
      navbarDropdown: "#282e4a",
      navbarLogin: "#009B87",
      cardBgColor: "#fff",
      cardColor: "#121314",
      cardBorderColor: "#ebedf0",
      inputColor: "#8d93af",
      inputBorderColor: "#efefefc0",
      inputFocusColor: "#36b6ff",
      otpColor: "#121314",
      otpBorderColor: "#121314",
      timerColor: "#919aab",
      alarm: "#f1750a",
      loginAlert: "#fffdf0",
      loginAlertBorder: "#ebedf0",
      stepperConnector: "#f5f6f6",
      stepperActiveBgColor: "#009B87",
      stepperDeactiveBgColor: "#f5f6f6",
      stepperDescriptionActive: "#121314",
      stepperDescriptionDeactive: "#b1b3b8",
      stepperDeactiveColor: "#121314",
      currencyColor: "#b1b3b8",
      profileBackground: "#F4F6F9",
      switchContainer: "#F4F4F4",
      disabledBox: "#FAFAFA",
      blueBox: "#0D74E90D",
    },
    typography: {
      green: "#009B87",
      primary: "#121314",
      secondary: "#408CFF",
      link: "#408CFF",
      error: "#db1d3e",
    },
    icon: {
      phone: "#B1B3B8",
      darkMode: "#B1B3B8",
      lightkMode: "#fff",
      edit: "#121314",
    },
    button: {
      switchDeactive: "#2C344E",
      dlApp: "#fff",
      switchActive: "#408CFF",
      downloadApp: "#fff",
      primary: newTheme.primaryColors.primary,
      lightPrimary: "#009B871A",
      hover: "#32c497",
      danger: newTheme.semanticColors.danger,
      info: newTheme.semanticColors.info,
      secondary: "#fff",
    },
    color: {
      blue: newTheme.semanticColors.info,
      red: newTheme.semanticColors.danger,
      green: newTheme.primaryColors.primary,
      silver: "#9e9e9f",
      bronze: "#d48e4c",
      gray: "#69717e",
      gray2: "#F2F5FA",
      gray3: "#FBFBFB",
      darkGray: "#5d6f7e",
      darkGray2: "#5B5B5B",
      lightGray: "#eaeef3",
      lightGray2: "#F6F6F6",
      lighterGray: "#fafcff",
      black: "#212427",
      shadow: "#5353530d",
      blueBorder: "#424B6A",

      // primary: {
      //   50: "#E9FBF6",
      //   100: "#D4F7ED",
      //   200: "#A5EED8",
      //   300: "#64E2BD",
      //   400: "#26CF9C",
      //   500: "#009B87",
      //   600: "#1D9F78",
      //   700: "#1A8E6B",
      //   800: "#16795B",
      //   900: "#105641",
      // },
      warning: {
        50: "#FEF1E7",
        100: "#FDE4CE",
        200: "#FBC99D",
        300: "#F9AE6C",
        400: "#F79036",
        500: "#F1750A",
        600: "#BF5D08",
        700: "#934806",
        800: "#623004",
        900: "#311802",
      },
      // error: {
      //   50: "#FCE8EC",
      //   100: "#F9D2D8",
      //   200: "#F2A0AE",
      //   300: "#ED7388",
      //   400: "#E74661",
      //   500: "#DB1D3E",
      //   600: "#B01731",
      //   700: "#831124",
      //   800: "#560B18",
      //   900: "#2D060C",
      // },
    },
    badge: {
      yellow: "#FFBD0C",
      blue: "#0D74E9",
      bgYellow: "#FFBD0C1A",
      bgBlue: "#0D74E91A",
      bgGreen: "#009B871A",
      bgRed: "#DB1D3E1A",
    },
  },
  darkTheme = {
    ...common,
    components: {
      backgroundColor: "#21263D",
      disabledButton: "#283048",
      navbar: "#0f1835",
      navbarDropdown: "#282e4a",
      navbarLogin: "#009B87",
      cardBgColor: "#101831",
      cardColor: "#fff",
      cardBorderColor: "#272e44",
      inputColor: "#8d93af",
      inputBorderColor: "#efefefc0",
      inputFocusColor: "#36b6ff",
      otpColor: "#ebedf0",
      otpBorderColor: "#efefefc0",
      timerColor: "#919aab",
      alarm: "#f1750a",
      loginAlert: "#303447",
      loginAlertBorder: "#303447",
      stepperConnector: "#272e44",
      stepperActiveBgColor: "#009B87",
      stepperDeactiveBgColor: "#272e44",
      stepperDescription: "#d2d4d6",
      stepperDescriptionActive: "#d2d4d6",
      stepperDescriptionDeactive: "#b1b3b8",
      stepperDeactiveColor: "#8d93af",
      currencyColor: "#8d93af",
    },
    typography: {
      green: "#009B87",
      primary: "#fff",
      secondary: "#408CFF",
      link: "#408CFF",
      error: "#db1d3e",
    },
    icon: {
      phone: "#8D93AF",
      darkMode: "#fff",
      lightkMode: "#919AAB",
      edit: "#efefefc0",
    },
    button: {
      switchActive: "#408CFF",
      downloadApp: "#d2d4d6",
      switchDeactive: "#2C344E",
      dlApp: "#d2d4d6",
      primary: "#009B87",
    },
    color: {
      blue: "#408cff",
      red: "#db1d3e",
      green: "#009B87",
      silver: "#9e9e9f",
      gold: "",
      bronze: "#d48e4c",
    },
  };

export const utils = {
  shadow: "0px 6px 26px 0px #101E730F",
  border: `1px solid ${newTheme.bgColors[2]}`,
};

const setByDir = (dir) => {
  const marginRight = (val) => {
    return dir == "rtl"
      ? css`
          margin-right: ${val};
        `
      : css`
          margin-left: ${val};
        `;
  };

  const marginLeft = (val) => {
    return dir == "rtl"
      ? css`
          margin-left: ${val};
        `
      : css`
          margin-right: ${val};
        `;
  };

  const paddingRight = (val) => {
    return dir == "rtl"
      ? css`
          padding-right: ${val};
        `
      : css`
          padding-left: ${val};
        `;
  };

  const paddingLeft = (val) => {
    return dir == "rtl"
      ? css`
          padding-left: ${val};
        `
      : css`
          padding-right: ${val};
        `;
  };

  const right = (val) => {
    return dir == "rtl"
      ? css`
          right: ${val};
        `
      : css`
          left: ${val};
        `;
  };

  const left = (val) => {
    return dir == "rtl"
      ? css`
          left: ${val};
        `
      : css`
          right: ${val};
        `;
  };

  const translateX = (val, others = "") => {
    const input = `${val}`.split(/([0-9]+)/);
    return dir == "rtl"
      ? css`
          transform: ${others + " translateX(" + input[1] + input[2] + ")"};
        `
      : css`
          transform: ${others +
          " translateX(" +
          -1 * +input[1] +
          input[2] +
          ")"};
        `;
  };

  const TextAlign = (val) => {
    return dir == "rtl"
      ? css`
          text-align: ${val == "right" ? "right" : "left"};
        `
      : css`
          text-align: ${val == "right" ? "left" : "right"};
        `;
  };

  return {
    marginRight,
    marginLeft,
    paddingRight,
    paddingLeft,
    right,
    left,
    translateX,
    TextAlign,
  };
};

export const createTheme = (mode = "light", dir = "rtl") => {
  // const theme = mode == "light" ? newTheme : darkTheme;
  // return { ...theme, dir };
  return { ...lightTheme, ...newTheme, ...utils, dir, setByDir: setByDir(dir) };
};
