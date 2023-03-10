import { screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show the `game` text", () => {
      const expectedText = "game";

      renderWithProviders(<Header />);

      const gamelabHeader = screen.getByText(expectedText);

      expect(gamelabHeader).toBeOnTheScreen();
    });
  });
});
