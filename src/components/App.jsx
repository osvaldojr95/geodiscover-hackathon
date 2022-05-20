// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import ResetCss from "../styles/resetCss.jsx";
import GlobalStyle from "../styles/globalStyles.jsx";

export default function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <div>
        {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/random" element={<Random />} />
                <Route path="/game" element={<Game />} />
              </Routes>
            </BrowserRouter> */}
      </div>
    </>
  );
}

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
// `;
