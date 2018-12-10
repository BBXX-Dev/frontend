// styled-components.ts
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface ThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = (styledComponents as ThemedStyledComponentsModule<
  any
>) as ThemedStyledComponentsModule<ThemeInterface>;

export interface IThemeInterface {
  primaryColor?: string;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const theme = {
  primaryColor: "#e9e9eb",
  fontFamily: "Helvetica"
  // fontSize: "16px",
  // lineHeight: "16px"
};

const GlobalStyle = createGlobalStyle<{ theme: IThemeInterface }>`
  body {
    font-family: "Helvetica Neue"
    text-align: center
  }
`;

export { css, createGlobalStyle, GlobalStyle, keyframes, ThemeProvider };
export default styled;
