import "styled-components";
import { ThemeType } from "./index";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    mediumBody: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
