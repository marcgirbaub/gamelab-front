import React from "react";
import { render, screen } from "@testing-library/react-native";
import GameCard from "./GameCard";

describe("Given a GameCard component", () => {
  describe("When rendered with the game `The Witcher`", () => {
    test("Then it should show the title `The Witcher` and the categories `Action`, `Adventure`, and its image", () => {
      const name = "The Witcher";
      const categories = ["Action", "Adventure"];
      const platforms = ["Playstation", "Windows", "Apple", "Xbox", "Nintendo"];

      render(
        <GameCard
          name={name}
          categories={categories}
          image="theWitcher"
          platforms={platforms}
        />
      );

      const expectedName = screen.getByText(name);
      const expectedActionCategory = screen.getByText(categories[0]);
      const expectedAdventureCategory = screen.getByText(categories[1]);
      const expectedImage = screen.getByLabelText(name);

      expect(expectedName).toBeOnTheScreen();
      expect(expectedActionCategory).toBeOnTheScreen();
      expect(expectedAdventureCategory).toBeOnTheScreen();
      expect(expectedImage).toBeOnTheScreen();
    });
  });

  describe("When rendered with the game `The Witcher` without any platform", () => {
    test("Then it should show an icon with the label `platform icon`", () => {
      const name = "The Witcher";
      const categories = ["Action", "Adventure"];
      const platforms = [""];

      render(
        <GameCard
          name={name}
          categories={categories}
          image="theWitcher"
          platforms={platforms}
        />
      );

      const expectedIcon = screen.getByLabelText("platform icon");

      expect(expectedIcon).toBeOnTheScreen();
    });
  });
});
