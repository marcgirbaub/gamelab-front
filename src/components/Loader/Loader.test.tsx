import React from "react";
import { screen } from "@testing-library/react-native";
import Loader from "./Loader";
import renderWithProviders from "../../testUtilts/renderWithProviders";

describe("Given a Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show the loader animation", async () => {
      const loaderId = "loader";

      renderWithProviders(<Loader />);

      const loader = await screen.getByTestId(loaderId);

      expect(loader).toBeDefined();
    });
  });
});
