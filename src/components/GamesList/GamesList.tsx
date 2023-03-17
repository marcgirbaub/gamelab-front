import React from "react";
import { FlatList, View } from "react-native";
import { type GamesStructure } from "../../redux/features/games/types";
import { useAppSelector } from "../../redux/hooks";
import isTablet from "../../utils/isTablet";
import GameCard from "../GameCard/GameCard";
import LoadMore from "../LoadMore/LoadMore";
import gamesListStyles from "./GamesListStyles";

interface GamesListProps {
  games: GamesStructure;
}

const GamesList = ({ games }: GamesListProps): JSX.Element => {
  const {
    pagination: { current, total },
    isLoading,
  } = useAppSelector((state) => state.ui);

  const renderLoadMore = () => {
    if (!isLoading) {
      return current + 1 === total ? (
        <View style={{ marginBottom: 24 }} />
      ) : (
        <LoadMore />
      );
    }

    return <View></View>;
  };

  const gapItem = (): JSX.Element => <View style={gamesListStyles.gap} />;

  const getNumberOfColumns = () => (isTablet ? 2 : 1);
  return (
    <View>
      {isTablet ? (
        <FlatList
          data={games}
          renderItem={({ item }) => <GameCard game={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={gapItem}
          ListFooterComponent={renderLoadMore}
          numColumns={getNumberOfColumns()}
          columnWrapperStyle={{ justifyContent: "space-around" }}
        />
      ) : (
        <FlatList
          data={games}
          renderItem={({ item }) => <GameCard game={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={gapItem}
          ListFooterComponent={renderLoadMore}
          numColumns={getNumberOfColumns()}
        />
      )}
    </View>
  );
};

export default GamesList;
