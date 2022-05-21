import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRanking } from "../../contexts/RankingContext.jsx";

export default function Ranking() {
  const { ranking, setRanking, showRanking, toggleRanking } = useRanking();

  useEffect(() => {
    const getRanking = async () => {
      if (showRanking) {
        const URL = "/ranking";
        try {
          const response = await axios.get(URL);
          const { data } = response;
          setRanking(
            data.map((item, index) => {
              return (
                <Posicao key={index}>
                  <h4>{item.name}</h4>
                  <h4>{item.score}</h4>
                </Posicao>
              );
            })
          );
        } catch (e) {}
      }
    };
    getRanking();
  }, [showRanking]);

  if (showRanking) {
    return (
      <Container>
        <div className="tabela">
          <div className="topo">
            <h2>Ranking</h2>
            <h3 onClick={toggleRanking}>X</h3>
          </div>
          {ranking}
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20% 15%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);

  h2 {
    font-size: 30px;
    font-weight: 700;
    font-family: "Lexend Deca", sans-serif;
  }

  h3 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: red;
    position: absolute;
    top: 10px;
    right: 20px;
  }

  .tabela {
    height: 100%;
    width: 100%;
    background-color: var(--white);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .topo {
    height: 20%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Posicao = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--greyDark);
  }
`;
