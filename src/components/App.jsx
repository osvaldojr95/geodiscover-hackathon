import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ResetCss from "../styles/ResetCss.jsx";
import GlobalStyle from "../styles/GlobalStyles.jsx";
import RankingProvider from "./../contexts/RankingContext.jsx";
import Home from "./Home.jsx";
import Game from "./Game.jsx";

export default function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <Container>
        <RankingProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              {/* <Route path="/random" element={<Random />} /> */}
            </Routes>
          </BrowserRouter>
        </RankingProvider>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
