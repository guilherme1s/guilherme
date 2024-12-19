import { Header } from "./components/Header/Header";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { GlobalStyles } from "./styles/Global.styles"

import * as S from "./App.styles";
import { About } from "./components/About/About";

export function App() {

  return (
    <>
      <GlobalStyles />
        <Header />

        <S.MainContentWrapper>
          <ProfileCard />
          <About />
      </S.MainContentWrapper>
    </>
  );
}