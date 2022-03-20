import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${props => props.theme.fonts.main};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    height: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
`;