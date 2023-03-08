import React from "react";
import { render, screen } from "@testing-library/react-native";
import Loader from "./Loader";
import Wrapper from "../../mocks/Wrapper";

describe("Given a Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show the loader animation", async () => {
      const loaderId = "loader";

      render(
        <Wrapper>
          <Loader />
        </Wrapper>
      );

      const loader = await screen.getByTestId(loaderId);

      expect(loader).toBeDefined();
    });
  });
});
