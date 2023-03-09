import React from "react";
import { screen } from "@testing-library/react-native";
import Loader from "./Loader";
import renderWithProviders from "../../utils/renderWithProviders";

describe("Given a Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show a loader with an accessible name `loading`", async () => {
      const accessibilityName = "loading";

      renderWithProviders(<Loader />);

      const loader = await screen.getByLabelText(accessibilityName);

      expect(loader).toBeOnTheScreen();
    });
  });
});
