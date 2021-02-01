import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#eeeeee",
  fontColor: "#111111",
  containerColor: "pink",
};

export const darkTheme = {
  body: "#111111",
  fontColor: "#dddddd",
  containerColor: "blue",
};

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body}
    }

`;
