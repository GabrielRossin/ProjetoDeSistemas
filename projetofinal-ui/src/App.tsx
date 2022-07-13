import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./routes/routes";
import GlobalStyle from './styles/global/global';
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { DefaultTheme, ThemeProvider } from "styled-components";
import NavbarInternoProfile from "./components/NavBarInternoProfile";
import usePeristedState from './utils/usePersistedState'


const App: React.FC = () => {

  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  
  return (
    
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <NavbarInternoProfile toogleTheme={toggleTheme}/> 
          <Routes />
      </ThemeProvider>
  );
};
export default App;


