import { screen, fireEvent } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import Routes from "../routes";
import BottomTabNavigator from "./BottomTabNavigator";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const mockNavigation = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({ navigate: mockNavigation }),
}));

describe("Given a BottomTabNavigator component", () => {
  describe("When rendered", () => {
    test("Then it should show a bottom navigator tab bar with a tab `Explore` and a tab `Log out`", async () => {
      const exploreTabText = "Explore";
      const logoutTabText = "Log out";

      renderWithProviders(<BottomTabNavigator />);

      const exploreTab = await screen.getByText(exploreTabText);
      const logoutTab = await screen.getByText(logoutTabText);

      expect(exploreTab).toBeOnTheScreen();
      expect(logoutTab).toBeOnTheScreen();
    });
  });

  describe("Then the user presses on the `Log out` tab", () => {
    test("Then it should call the navigate to the LoginScreen", async () => {
      const logoutTabText = "Log out";

      renderWithProviders(<BottomTabNavigator />);
      const logoutTab = await screen.getByText(logoutTabText);
      fireEvent.press(logoutTab);

      expect(mockNavigation).toHaveBeenCalledWith(Routes.login);
    });
  });
});
