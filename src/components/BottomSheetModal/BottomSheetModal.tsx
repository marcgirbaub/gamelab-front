import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import bottomSheetModalStyles from "./BottomSheetModalStyles";

interface BottomSheetModalProps {
  mainAction: () => void;
  actionToClose: () => void;
  isVisible: boolean;
  text: string;
  buttontext: string;
}

const BottomSheetModal = ({
  mainAction,
  actionToClose,
  isVisible,
  text,
  buttontext,
}: BottomSheetModalProps): JSX.Element => (
  <View>
    <Modal
      isVisible={isVisible}
      style={{ margin: 0 }}
      swipeDirection="down"
      onSwipeComplete={actionToClose}
    >
      <View style={bottomSheetModalStyles.modal}>
        <View style={bottomSheetModalStyles.swipeIndicator} />
        <TouchableOpacity
          style={bottomSheetModalStyles.closeButton}
          activeOpacity={0.5}
          accessibilityRole="button"
          onPress={actionToClose}
          accessibilityLabel="close the modal"
        >
          <FontAwesomeIcon
            icon={faXmark}
            size={30}
            style={bottomSheetModalStyles.closeIcon}
          />
        </TouchableOpacity>
        <Text style={bottomSheetModalStyles.modalText}>{text}</Text>
        <TouchableOpacity
          onPress={mainAction}
          style={bottomSheetModalStyles.button}
          accessibilityLabel={buttontext}
        >
          <Text style={bottomSheetModalStyles.buttonText}>{buttontext}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  </View>
);

export default BottomSheetModal;
