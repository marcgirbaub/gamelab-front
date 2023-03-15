import { screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import CreateScreen from "./CreateScreen";

describe("Given a CreateScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show a form with the title `Create a game` and a button with the text `send`", () => {
      const titleText = "Create a game";
      const buttonText = "Send";

      renderWithProviders(<CreateScreen />);

      const title = screen.getByText(titleText);
      const button = screen.getByText(buttonText);

      expect(title).toBeOnTheScreen();
      expect(button).toBeOnTheScreen();
    });
  });
});
