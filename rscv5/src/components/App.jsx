import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "components/pages/Home";
import Login from "components/pages/Login";
import LightTheme from "themes/light";
import DarkTheme from "themes/dark";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${({ theme }) => theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(({ id }) => (id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
