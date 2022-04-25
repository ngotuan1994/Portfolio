import { ThemeProvider } from "styled-components";
import {  LightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";
import Main from './components/Main'
import { Route } from "react-router-dom";
import About from "./components/About";
import SkillsPage from "./components/SkillsPage";
import WorkPage from "./components/WorkPage";
import SlideRoutes from "react-slide-routes";

function App() {

  return(
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={LightTheme}>


            <SlideRoutes><Route  path="/" element={<Main/>} />
              <Route  path="/about" element={<About/>} />
              <Route  path="/Skills" element={<SkillsPage/>} />
              <Route path="/Work" element={<WorkPage />} />
            </SlideRoutes>







      </ThemeProvider>


    </>
  )
}

export default App;
