import React from "react";
import { FlatList, View } from "react-native";
import { type Games } from "../../redux/features/games/types";
import { useAppSelector } from "../../redux/hooks";
import GameCard from "../GameCard/GameCard";
import LoadMore from "../LoadMore/LoadMore";
import gamesListStyles from "./GamesListStyles";

interface GamesListProps {
  games: Games;
}

const GamesList = ({ games }: GamesListProps): JSX.Element => {
  const { current, total } = useAppSelector((state) => state.ui.pagination);

  const renderLoadMore = () =>
    current + 1 === total ? (
      <View style={{ marginBottom: 24 }} />
    ) : (
      <LoadMore />
    );

  const gapItem = (): JSX.Element => <View style={gamesListStyles.gap} />;

  return (
    <View>
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={gapItem}
        ListFooterComponent={renderLoadMore}
      />
    </View>
  );
};

export default GamesList;
