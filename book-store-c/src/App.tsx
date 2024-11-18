import Layout from "./Components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { getTheme, ThemeName } from "./style/theme";
import ThemeSwitcher from "./Components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  return( 
    <BookStoreThemeProvider>
   {/* <ThemeSwitcher /> */}
  <Layout>
    <Home />
  </Layout>
  </BookStoreThemeProvider>
  );
}

export default App;
