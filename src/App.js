import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";
import Main from './components/Main'
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ProjectPage from "./components/ProjectPage";
import SkillsPage from "./components/SkillsPage";
import WorkPage from "./components/WorkPage";
function App() {
  return(
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={LightTheme}>
        <div>
          <Routes>
            <Route  path="/" element={<Main/>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/ProjectPage" element={<ProjectPage/>} />
            <Route  path="/SkillsPage" element={<SkillsPage/>} />
            <Route  path="/WorkPage" element={<WorkPage/>} />


        </Routes>
        </div>


      </ThemeProvider>


    </>
  )
}

export default App;
