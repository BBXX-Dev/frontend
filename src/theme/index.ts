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
  primaryColor: string;
}

export const theme = {
  primaryColor: "#e9e9eb"
};

const GlobalStyles = createGlobalStyle<{
  whiteText: boolean;
  blackBackground: boolean;
}>`
  body {
    color: ${props => (props.whiteText ? "white" : "black")};
    background-color: ${props => (props.blackBackground ? "black" : "white")};
  }
`;

export { css, createGlobalStyle, GlobalStyles, keyframes, ThemeProvider };
export default styled;
