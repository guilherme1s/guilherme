import { Header } from "./components/Header/Header";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { GlobalStyles } from "./styles/Global.styles"
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projetcts";

import * as S from "./App.styles";

export function App() {

  return (
    <>
      <GlobalStyles />
        <S.MainContentWrapper>
          <Header />
          <ProfileCard />
          <About />
          <Projects />
      </S.MainContentWrapper>
    </>
  );
}
