/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import GameCard from "../../components/GameCard/GameCard";
import Header from "../../components/Header/Header";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import myLibraryScreenStyles from "./MyLibraryScreenStyles";

const MyLibraryScreen = (): JSX.Element => {
  const { getUserGames } = useGames();
  const { createdByUserGames } = useAppSelector((state) => state.games);
  const { isLoading } = useAppSelector((state) => state.ui);

  useEffect(() => {
    getUserGames();
  }, [getUserGames]);

  return (
    <SafeAreaView>
      <Header />
      <Text style={myLibraryScreenStyles.title}>My Library</Text>
      <View style={myLibraryScreenStyles.container}>
        {createdByUserGames!.length === 0 && !isLoading ? (
          <Text style={myLibraryScreenStyles.notFoundText}>No games found</Text>
        ) : (
          <FlatList
            data={createdByUserGames}
            renderItem={({ item }) => <GameCard game={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyLibraryScreen;
