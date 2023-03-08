import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { useAppSelector } from "../../store/hooks";
import colorStyles from "../../styles/colorStyles";
import loaderStyles from "./LoaderStyles";

const Loader = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <>
      {isLoading && (
        <Modal animationType="none" transparent={true} visible={true}>
          <View style={loaderStyles.container}>
            <ActivityIndicator size="large" color={`${colorStyles.accent}`} />
          </View>
        </Modal>
      )}
    </>
  );
};

export default Loader;
