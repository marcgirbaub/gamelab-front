import { type ModalPayload, type UiState } from "./types";
import {
  activateModalActionCreator,
  closeModalActionCreator,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When called with the action to set isLoading to true", () => {
    test("Then it should return the new state with isLoading set to true", () => {
      const currentUiState: UiState = {
        isLoading: false,
        isError: false,
        modal: "",
      };
      const expectedUiState: UiState = { ...currentUiState, isLoading: true };

      const setIsLoadingAction = setIsLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, setIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to unset isLoading to true", () => {
    test("Then it should return the new state with isLoading set to false", () => {
      const currentUiState: UiState = {
        isLoading: true,
        isError: false,
        modal: "",
      };
      const expectedUiState: UiState = { ...currentUiState, isLoading: false };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, unsetIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to activate the modal with an error with text `There was a problem`", () => {
    test("Then it should return a new state with isError set to true and a modal property with the provided text", () => {
      const currentUiState: UiState = {
        isLoading: true,
        isError: false,
        modal: "",
      };
      const modalError = "There was a problem";
      const modalPayload: ModalPayload = {
        modal: modalError,
        isError: true,
      };

      const expectedUiState: UiState = {
        ...currentUiState,
        isError: true,
        modal: modalError,
      };

      const activateModalAction = activateModalActionCreator(modalPayload);
      const newUiState = uiReducer(currentUiState, activateModalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to close the modal", () => {
    test("Then it should return a new state with isError set to false and a modal property empty", () => {
      const currentUiState: UiState = {
        isLoading: true,
        isError: true,
        modal: "There was a problem",
      };

      const expectedUiState: UiState = {
        ...currentUiState,
        isError: false,
        modal: "",
      };

      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(currentUiState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
