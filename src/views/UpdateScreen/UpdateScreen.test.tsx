import { screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import UpdateScreen from "./UpdateScreen";

describe("Given an UpdateScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show a form with a title `Modify your game`", () => {
      const titleText = "Modify your game";

      renderWithProviders(<UpdateScreen />);

      const title = screen.getByText(titleText);

      expect(title).toBeOnTheScreen();
    });
  });
});
