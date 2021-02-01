import { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .container {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
    border-radius: 10px;
    background-color: ${(props) => props.theme.containerColor};
  }
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="container">
          <h1>Hello World</h1>
          <button onClick={() => themeToggler()}>Change theme</button>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
