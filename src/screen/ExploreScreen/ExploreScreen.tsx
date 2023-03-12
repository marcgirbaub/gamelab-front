/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import Filter from "../../components/Filter/Filter";
import GamesList from "../../components/GamesList/GamesList";
import Header from "../../components/Header/Header";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../store/hooks";
import exploreScreenStyles from "./ExploreScreenStyles";

const ExploreScreen = () => {
  const { getAllGames } = useGames();
  const {
    pagination: { current },
    filter,
  } = useAppSelector((state) => state.ui);

  useEffect(() => {
    getAllGames(current, filter);
  }, [getAllGames, current, filter]);

  const games = useAppSelector((state) => state.games.games);

  return (
    <SafeAreaView>
      <Header />
      <View style={exploreScreenStyles.container}>
        <Filter />
        <GamesList games={games} />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
