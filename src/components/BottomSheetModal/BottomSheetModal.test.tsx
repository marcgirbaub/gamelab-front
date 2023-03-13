import React from "react";
import { render, screen } from "@testing-library/react-native";
import BottomSheetModal from "./BottomSheetModal";

describe("Given a BottomSheetModal component", () => {
  describe("When rendered with the text `Please confirm` and a button with a text `Confirm`", () => {
    test("Then it should show this text and the button with the specified button text", () => {
      const text = "Please confirm";
      const buttontext = "Confirm";
      const action = () => "";

      render(
        <BottomSheetModal
          buttontext={buttontext}
          actionToClose={action}
          isVisible={true}
          mainAction={action}
          text={text}
        />
      );

      const modalText = screen.getByText(text);
      const modalButton = screen.getByText(buttontext);

      expect(modalButton).toBeOnTheScreen();
      expect(modalText).toBeOnTheScreen();
    });
  });
});
