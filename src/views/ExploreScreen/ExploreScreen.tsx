/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Filter from "../../components/Filter/Filter";
import GamesList from "../../components/GamesList/GamesList";
import Header from "../../components/Header/Header";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
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
        {games.length === 0 ? (
          <Text style={exploreScreenStyles.notFoundText}>No games found</Text>
        ) : (
          <GamesList games={games} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
