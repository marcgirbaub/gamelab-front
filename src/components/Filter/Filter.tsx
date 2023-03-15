import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { addFilterActionCreator } from "../../redux/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import filterStyles from "./FilterStyles";

const Filter = (): JSX.Element => {
  const filter = useAppSelector((state) => state.ui.filter);
  const dispatch = useAppDispatch();

  const categories: string[] = [
    "Arcade",
    "Action",
    "RPG",
    "Adventure",
    "Strategy",
    "Shooter",
    "Platformer",
    "Board games",
  ];

  const gapItem = (): JSX.Element => <View style={filterStyles.gap} />;
  const horizontalViews = (): JSX.Element => (
    <View style={filterStyles.horizontal} />
  );

  const handleOnClickFilter = (filterSelected: string) => {
    if (filterSelected === filter) {
      dispatch(addFilterActionCreator(""));

      return;
    }

    dispatch(addFilterActionCreator(filterSelected));
  };

  return (
    <View style={filterStyles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={gapItem}
        ListFooterComponent={horizontalViews}
        ListHeaderComponent={horizontalViews}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            style={
              item === filter
                ? filterStyles.selectedButton
                : filterStyles.button
            }
            onPress={() => {
              handleOnClickFilter(item);
            }}
            accessibilityLabel={item}
          >
            <Text
              style={
                item === filter
                  ? filterStyles.selectedFilter
                  : filterStyles.filter
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Filter;
