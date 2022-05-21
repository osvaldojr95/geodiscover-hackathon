import React, { createContext, useState, useContext } from "react";

const RankingContext = createContext();

export default function RankingProvider({ children }) {
  const [showRanking, setShowRanking] = useState(false);
  const [ranking, setRanking] = useState([]);

  const toggleRanking = () => {
    setShowRanking(showRanking ? false : true);
  };

  return (
    <RankingContext.Provider
      value={{
        showRanking,
        setShowRanking,
        toggleRanking,
        ranking,
        setRanking,
      }}
    >
      {children}
    </RankingContext.Provider>
  );
}

export function useRanking() {
  const context = useContext(RankingContext);
  const { showRanking, setShowRanking, toggleRanking, ranking, setRanking } =
    context;
  return { showRanking, setShowRanking, toggleRanking, ranking, setRanking };
}
