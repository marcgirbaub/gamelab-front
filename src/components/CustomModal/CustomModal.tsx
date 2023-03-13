import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faXmark,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import customModalStyles from "./CustomModalStyles";
import { closeModalActionCreator } from "../../redux/features/ui/uiSlice";

const CustomModal = (): JSX.Element => {
  const { isError, modal } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeModalActionCreator());
  };

  return (
    <Modal
      isVisible={true}
      swipeDirection={["down", "right"]}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onSwipeComplete={closeModal}
    >
      <View style={customModalStyles.container}>
        <TouchableOpacity
          style={customModalStyles.closeButton}
          activeOpacity={0.5}
          onPress={closeModal}
          accessibilityRole="button"
        >
          <FontAwesomeIcon
            icon={faXmark}
            size={40}
            style={customModalStyles.closeIcon}
          />
        </TouchableOpacity>
        <FontAwesomeIcon
          icon={isError ? faCircleExclamation : faCircleCheck}
          size={100}
          style={
            isError
              ? customModalStyles.errorIcon
              : customModalStyles.successIcon
          }
        />
        <Text
          style={
            isError
              ? customModalStyles.infoError
              : customModalStyles.infoSuccess
          }
        >
          {modal}
        </Text>
      </View>
    </Modal>
  );
};

export default CustomModal;
