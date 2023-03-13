import { screen, fireEvent, waitFor } from "@testing-library/react-native";
import { M } from "msw/lib/glossary-de6278a9";
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

afterEach(() => {
  jest.clearAllMocks();
});

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
    test("Then a modal with the text `Are you sure you want to log out?` should be shown", async () => {
      const logoutTabText = "Log out";
      const modalText = "Are you sure you want to log out?";

      renderWithProviders(<BottomTabNavigator />);
      const logoutTab = await screen.getByText(logoutTabText);

      await waitFor(async () => {
        fireEvent.press(logoutTab);
      });

      const modal = screen.getByText(modalText);

      expect(modal).toBeOnTheScreen();
    });
  });

  describe("Then the user presses on the `Log out` tab and then presses on the `Log out button in order to log out`", () => {
    test("Then the navigation should be called with the route `login`", async () => {
      const logoutTabText = "Log out";
      const logoutButtonLabel = "Log out";

      renderWithProviders(<BottomTabNavigator />);
      const logoutTab = await screen.getByText(logoutTabText);

      await waitFor(async () => {
        fireEvent.press(logoutTab);
      });

      const confirmButton = screen.getByLabelText(logoutButtonLabel);

      await waitFor(async () => {
        fireEvent.press(confirmButton);
      });

      expect(mockNavigation).toHaveBeenCalledWith(Routes.login);
    });
  });

  describe("Then the user presses on the `Log out` tab and then presses on the icon to close the modal", () => {
    test("Then the navigation should have not been called and the modal should not be visible anymore", async () => {
      const logoutTabText = "Log out";
      const closeButtonLabel = "close the modal";

      renderWithProviders(<BottomTabNavigator />);
      const logoutTab = await screen.getByText(logoutTabText);

      await waitFor(async () => {
        fireEvent.press(logoutTab);
      });

      const closeModalButton = screen.getByLabelText(closeButtonLabel);

      await waitFor(async () => {
        fireEvent.press(closeModalButton);
      });

      expect(mockNavigation).not.toHaveBeenCalled();
    });
  });
});
