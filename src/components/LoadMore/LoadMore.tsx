import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { nextPageActionCreator } from "../../redux/features/ui/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import loadMoreStyles from "./LoadMoreStyles";

const LoadMore = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(nextPageActionCreator());
  };

  return (
    <View>
      <TouchableOpacity
        style={loadMoreStyles.container}
        activeOpacity={0.5}
        onPress={onClick}
        accessibilityLabel="loadmore"
      >
        <Text style={loadMoreStyles.text}>Load more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadMore;
