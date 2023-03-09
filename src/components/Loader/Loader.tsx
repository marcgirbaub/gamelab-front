import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import colorStyles from "../../styles/colorStyles";
import loaderStyles from "./LoaderStyles";

const Loader = (): JSX.Element => (
  <Modal animationType="none" transparent={true} visible={true}>
    <View style={loaderStyles.container}>
      <ActivityIndicator
        size="large"
        color={`${colorStyles.accent}`}
        accessibilityLabel="loading"
      />
    </View>
  </Modal>
);

export default Loader;
