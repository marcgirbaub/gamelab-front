/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import GamesList from "../../components/GamesList/GamesList";
import Header from "../../components/Header/Header";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import myLibraryScreenStyles from "./MyLibraryScreenStyles";

const MyLibraryScreen = (): JSX.Element => {
  const { getUserGames } = useGames();
  const { games } = useAppSelector((state) => state.games);
  const {
    isLoading,
    pagination: { current, total },
  } = useAppSelector((state) => state.ui);

  useEffect(() => {
    getUserGames();
  }, [getUserGames, current, total]);

  return (
    <SafeAreaView>
      <Header />
      <Text style={myLibraryScreenStyles.title}>My Library</Text>
      <View style={myLibraryScreenStyles.container}>
        {games.length === 0 && !isLoading ? (
          <Text style={myLibraryScreenStyles.notFoundText}>No games found</Text>
        ) : (
          <GamesList games={games} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyLibraryScreen;
