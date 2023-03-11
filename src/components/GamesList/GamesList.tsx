import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import useGames from "../../hooks/useGames/useGames";
import { type Games } from "../../store/features/gamesSlice/types";
import GameCard from "../GameCard/GameCard";
import gamesListStyles from "./GamesListStyles";

interface GamesListProps {
  games: Games;
}

const GamesList = ({ games }: GamesListProps): JSX.Element => (
  <View>
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard game={item} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={gamesListStyles.gap} />}
    />
  </View>
);

export default GamesList;
