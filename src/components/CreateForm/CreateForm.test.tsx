import React from "react";
import * as ImagePicker from "expo-image-picker";
import { fireEvent, screen } from "@testing-library/react-native";
import { mockGameToCreate } from "../../mocks/gamesMocks";
import renderWithProviders from "../../utils/renderWithProviders";
import CreateForm from "./CreateForm";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockAddGame = jest.fn();
const mockUpdateGame = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => () => ({
  addGame: mockAddGame,
  updateGame: mockUpdateGame,
}));

jest.mock("expo-image-picker", () => ({
  launchImageLibraryAsync: jest.fn().mockResolvedValue({
    canceled: false,
    assets: [{ uri: "lol.jpeg" }],
    type: "image",
    width: "350",
    height: "197",
  }),
  MediaTypeOptions: jest.fn(),
}));

const mockImagePicker = jest.mocked(ImagePicker);

const checkboxesIds = [
  "playstation-checkbox",
  "xbox-checkbox",
  "windows-checkbox",
  "apple-checkbox",
  "nintendo-checkbox",
  "arcade-checkbox",
  "action-checkbox",
  "rpg-checkbox",
  "adventure-checkbox",
  "strategy-checkbox",
  "shooter-checkbox",
  "platformer-checkbox",
  "boardgames-checkbox",
];

describe("Given a CreateForm component", () => {
  const formTitle = "Create a games";

  describe("When rendered with the title `Create a game`", () => {
    test("Then it should show a title with the text `Create a game`", () => {
      renderWithProviders(<CreateForm title={formTitle} />);

      const title = screen.getByText(formTitle);

      expect(title).toBeOnTheScreen();
    });
  });

  describe("When the user writes on the fields inputs", () => {
    test("Then it should show the written text on the corresponding ipunts", async () => {
      renderWithProviders(<CreateForm title={formTitle} />);

      const gameNameInput = await screen.getByLabelText("enter game's name");
      const developerInput = await screen.getByLabelText(
        "enter developer's name"
      );
      const gameplayTimeInput = await screen.getByLabelText(
        "enter gameplay time"
      );
      const releaseYearInput = await screen.getByLabelText(
        "select release year"
      );
      const aboutInput = await screen.getByLabelText("about the game");

      fireEvent.changeText(gameNameInput, mockGameToCreate.name);
      fireEvent.changeText(developerInput, mockGameToCreate.developer);
      fireEvent.changeText(gameplayTimeInput, mockGameToCreate.gameplayTime);
      fireEvent.changeText(releaseYearInput, mockGameToCreate.releaseYear);
      fireEvent.changeText(aboutInput, mockGameToCreate.about);

      expect(gameNameInput.props.value).toBe(mockGameToCreate.name);
      expect(developerInput.props.value).toBe(mockGameToCreate.developer);
      expect(gameplayTimeInput.props.value).toBe(mockGameToCreate.gameplayTime);
      expect(releaseYearInput.props.value).toBe(mockGameToCreate.releaseYear);
      expect(aboutInput.props.value).toBe(mockGameToCreate.about);
    });
  });

  describe("When the user uploads an image", () => {
    test("Then it should call the function to set the image form state", () => {
      const imagePickerId = "pick an image";

      renderWithProviders(<CreateForm title={formTitle} />);

      const imagePickerButton = screen.getByTestId(imagePickerId);
      fireEvent.press(imagePickerButton);

      expect(mockImagePicker.launchImageLibraryAsync).toHaveBeenCalled();
    });
  });

  describe("When the user clicks on the send button", () => {
    test("Then it should call the addGame function", async () => {
      const sendButtonText = "Send";

      renderWithProviders(<CreateForm title={formTitle} />);

      const gameNameInput = await screen.getByLabelText("enter game's name");
      const developerInput = await screen.getByLabelText(
        "enter developer's name"
      );
      const gameplayTimeInput = await screen.getByLabelText(
        "enter gameplay time"
      );
      const releaseYearInput = await screen.getByLabelText(
        "select release year"
      );
      const aboutInput = await screen.getByLabelText("about the game");

      fireEvent.changeText(gameNameInput, mockGameToCreate.name);
      fireEvent.changeText(developerInput, mockGameToCreate.developer);
      fireEvent.changeText(gameplayTimeInput, mockGameToCreate.gameplayTime);
      fireEvent.changeText(releaseYearInput, mockGameToCreate.releaseYear);
      fireEvent.changeText(aboutInput, mockGameToCreate.about);

      checkboxesIds.forEach((checkboxId) => {
        const checkbox = screen.getByTestId(checkboxId);

        fireEvent.press(checkbox);
      });

      const sendButton = screen.getByText(sendButtonText);

      fireEvent.press(sendButton);

      expect(mockAddGame).toHaveBeenCalled();
    });
  });

  describe("When the user checks on all the checkboxes but then unchecks them and onnly checks the `playstation` and the `action` checkbox and presses the send button", () => {
    test("Then it should only send the playstation platform and action category", async () => {
      const sendButtonText = "Send";

      renderWithProviders(<CreateForm title={formTitle} />);

      const gameNameInput = await screen.getByLabelText("enter game's name");
      const developerInput = await screen.getByLabelText(
        "enter developer's name"
      );
      const gameplayTimeInput = await screen.getByLabelText(
        "enter gameplay time"
      );
      const releaseYearInput = await screen.getByLabelText(
        "select release year"
      );
      const aboutInput = await screen.getByLabelText("about the game");

      fireEvent.changeText(gameNameInput, mockGameToCreate.name);
      fireEvent.changeText(developerInput, mockGameToCreate.developer);
      fireEvent.changeText(gameplayTimeInput, mockGameToCreate.gameplayTime);
      fireEvent.changeText(releaseYearInput, mockGameToCreate.releaseYear);
      fireEvent.changeText(aboutInput, mockGameToCreate.about);

      checkboxesIds.forEach((checkboxId) => {
        const checkbox = screen.getByTestId(checkboxId);

        fireEvent.press(checkbox);
      });

      checkboxesIds.forEach((checkboxId) => {
        const checkbox = screen.getByTestId(checkboxId);

        fireEvent.press(checkbox);
      });

      const actionCheck = screen.getByTestId("action-checkbox");
      const playstationCheck = screen.getByTestId("playstation-checkbox");
      fireEvent.press(actionCheck);
      fireEvent.press(playstationCheck);

      const sendButton = screen.getByText(sendButtonText);

      fireEvent.press(sendButton);

      expect(mockAddGame).toHaveBeenCalled();
    });
  });

  describe("When the user uploads an image without extension", () => {
    test("Then it should call the function to set the image form state", () => {
      const imagePickerId = "pick an image";
      mockImagePicker.launchImageLibraryAsync.mockResolvedValue({
        canceled: false,
        assets: [{ uri: "lol" }],
        type: "image",
        width: "350",
        height: "197",
      });

      renderWithProviders(<CreateForm title={formTitle} />);

      const imagePickerButton = screen.getByTestId(imagePickerId);
      fireEvent.press(imagePickerButton);

      expect(mockImagePicker.launchImageLibraryAsync).toHaveBeenCalled();
    });
  });

  describe("When the user uploads an image but the operation is cancelled", () => {
    test("Then the button to upload another image should be on the screen so that the user can upload another one", () => {
      const imagePickerId = "pick an image";
      mockImagePicker.launchImageLibraryAsync.mockResolvedValue({
        canceled: true,
        assets: [{ uri: "lol" }],
        type: "image",
        width: "350",
        height: "197",
      });

      renderWithProviders(<CreateForm title={formTitle} />);

      const imagePickerButton = screen.getByTestId(imagePickerId);
      fireEvent.press(imagePickerButton);

      expect(imagePickerButton).toBeOnTheScreen();
    });
  });

  describe("When it receives a game and the user presses on the submit button", () => {
    test("Then it should call the updateGame function", async () => {
      const sendButtonText = "Send";

      renderWithProviders(
        <CreateForm title={formTitle} selectedGame={mockGameToCreate} />
      );

      const gameNameInput = await screen.getByLabelText("enter game's name");
      const developerInput = await screen.getByLabelText(
        "enter developer's name"
      );
      const gameplayTimeInput = await screen.getByLabelText(
        "enter gameplay time"
      );
      const releaseYearInput = await screen.getByLabelText(
        "select release year"
      );
      const aboutInput = await screen.getByLabelText("about the game");

      fireEvent.changeText(gameNameInput, mockGameToCreate.name);
      fireEvent.changeText(developerInput, mockGameToCreate.developer);
      fireEvent.changeText(gameplayTimeInput, mockGameToCreate.gameplayTime);
      fireEvent.changeText(releaseYearInput, mockGameToCreate.releaseYear);
      fireEvent.changeText(aboutInput, mockGameToCreate.about);

      checkboxesIds.forEach((checkboxId) => {
        const checkbox = screen.getByTestId(checkboxId);

        fireEvent.press(checkbox);
      });

      checkboxesIds.forEach((checkboxId) => {
        const checkbox = screen.getByTestId(checkboxId);

        fireEvent.press(checkbox);
      });

      const actionCheck = screen.getByTestId("action-checkbox");
      const playstationCheck = screen.getByTestId("playstation-checkbox");
      fireEvent.press(actionCheck);
      fireEvent.press(playstationCheck);

      const sendButton = screen.getByText(sendButtonText);

      fireEvent.press(sendButton);

      expect(mockUpdateGame).toHaveBeenCalled();
    });
  });
});
