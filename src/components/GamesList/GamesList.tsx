import React from "react";
import { FlatList, View } from "react-native";
import { type Games } from "../../store/features/gamesSlice/types";
import GameCard from "../GameCard/GameCard";
import gamesListStyles from "./GamesListStyles";

interface GamesListProps {
  games: Games;
}

const GamesList = ({ games }: GamesListProps): JSX.Element => {
  const gapItem = (): JSX.Element => <View style={gamesListStyles.gap} />;

  return (
    <View>
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={gapItem}
      />
    </View>
  );
};

export default GamesList;
