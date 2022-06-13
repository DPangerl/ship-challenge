import { createTheme, ThemeOptions } from "@mui/material/styles";

export type ThemeType = typeof theme;
export { GlobalStyle } from "./GlobalStyle";

type IThemeOptions = ThemeOptions;

const colors = {
  primary: "#02b3f4",
  secondary: "#dd5555",
};

export const theme = createTheme({
  typography: {
    fontFamily: "Barlow",
    mediumBody: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
} as IThemeOptions);
