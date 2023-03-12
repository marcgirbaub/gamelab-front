import React from "react";
import { FlatList, View } from "react-native";
import { type Games } from "../../store/features/gamesSlice/types";
import { useAppSelector } from "../../store/hooks";
import GameCard from "../GameCard/GameCard";
import LoadMore from "../LoadMore/LoadMore";
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
        ListFooterComponent={<LoadMore />}
      />
    </View>
  );
};

export default GamesList;
