import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Ranking from "./resources/Ranking.jsx";
import Button from "./resources/Button.jsx";
import { useRanking } from "../contexts/RankingContext";

export default function Home() {
  const { toggleRanking } = useRanking();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Ranking />
        <h1>GeoDiscover</h1>
        <div className="botoes">
          <Button
            margin="0 0 10px 0"
            callback={() => {
              navigate("/game");
            }}
          >
            Start Game
          </Button>
          <Button margin="0 0 40px 0">Random Questions</Button>
          <Button
            cor="var(--green)"
            background="var(--white)"
            border="2px solid var(--green)"
            callback={() => toggleRanking()}
          >
            Ranking
          </Button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;

  h1 {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    font-family: "Lexend Zetta", sans-serif;
  }

  .botoes {
    height: auto;
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
