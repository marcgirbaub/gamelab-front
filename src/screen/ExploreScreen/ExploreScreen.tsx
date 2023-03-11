/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native/";
import GamesList from "../../components/GamesList/GamesList";
import Header from "../../components/Header/Header";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../store/hooks";

const ExploreScreen = () => {
  const { getAllGames } = useGames();

  useEffect(() => {
    getAllGames();
  }, [getAllGames]);

  const games = useAppSelector((state) => state.games.games);

  return (
    <SafeAreaView>
      <Header />
      <GamesList games={games} />
    </SafeAreaView>
  );
};

export default ExploreScreen;
