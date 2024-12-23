import { Header } from "../components/Header/Header";
import { ProfileCard } from "../components/ProfileCard/ProfileCard";
import { About } from "../components/About/About";
import { Projects } from "../components/Projects/Projetcts";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global.styles"
import { themes } from "../styles/Themes";
import * as S from "./App.styles";

export function App() {

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
        <S.MainContentWrapper>
          <Header />
          <ProfileCard />
          <About />
          <Projects />
      </S.MainContentWrapper>
    </ThemeProvider>
  );
}
