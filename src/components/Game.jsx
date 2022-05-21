import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./resources/Button.jsx";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const tittle = () => {
    if (!question) {
      return "";
    }
    if (question.type === "flags") {
      return "De que país é essa bandeira?";
    } else if (question.type === "cultures") {
      return "Qual pais é culturalmente conhecido por:";
    } else if (question.type === "places") {
      return "Em qual país se localiza esse ponto turístico?";
    }
    return "";
  };

  const verify = (item) => {
    if (question.alternatives[item].isCorrect) {
      setScore(score + 1);
    }
    if (index !== questions.length - 1) {
      setQuestion(index + 1);
    } else {
      // BRICADEIRA DO RANKING
    }
  };

  useEffect(() => {
    const getRanking = async () => {
      const URL = "https://geodiscover.herokuapp.com/questions?type=game";
      try {
        const response = await axios.get(URL);
        const { data } = response;
        setQuestions(data);
      } catch (e) {}
    };
    getRanking();
  }, []);

  useEffect(() => {
    setQuestion(questions[index]);
  }, [questions]);

  return (
    <>
      <Container>
        <h2>{tittle()}</h2>
        <img src={question ? question.url : ""} />
        <main>
          <Button
            callback={() => {
              verify(0);
            }}
          >
            {question ? question.alternatives[0].name : ""}
          </Button>
          <Button
            callback={() => {
              verify(1);
            }}
          >
            {question ? question.alternatives[1].name : ""}
          </Button>
          <Button
            callback={() => {
              verify(2);
            }}
          >
            {question ? question.alternatives[2].name : ""}
          </Button>
          <Button
            callback={() => {
              verify(3);
            }}
          >
            {question ? question.alternatives[3].name : ""}
          </Button>
        </main>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px 5%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;

  h2 {
    height: 50px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    font-family: "Lexend Deca", sans-serif;
    color: var(--greyDark);
    margin-bottom: 10px;
  }

  img {
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
