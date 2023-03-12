import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../../store/hooks";
import loadMoreStyles from "./LoadMoreStyles";

const LoadMore = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <TouchableOpacity style={loadMoreStyles.container} activeOpacity={0.5}>
        <Text style={loadMoreStyles.text}>Load more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadMore;
