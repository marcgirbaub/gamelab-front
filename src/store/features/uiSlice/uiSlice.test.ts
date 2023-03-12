import { mockUiState, mockUiStateNotLoading } from "../../../mocks/uiMocks";
import { type ModalPayload, type UiState } from "./types";
import {
  activateModalActionCreator,
  closeModalActionCreator,
  nextPageActionCreator,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When called with the action to set isLoading to true", () => {
    test("Then it should return the new state with isLoading set to true", () => {
      const expectedUiState: UiState = {
        ...mockUiStateNotLoading,
        isLoading: true,
      };

      const setIsLoadingAction = setIsLoadingActionCreator();

      const newUiState = uiReducer(mockUiStateNotLoading, setIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to unset isLoading to true", () => {
    test("Then it should return the new state with isLoading set to false", () => {
      const expectedUiState: UiState = { ...mockUiState, isLoading: false };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();

      const newUiState = uiReducer(mockUiState, unsetIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to activate the modal with an error with text `There was a problem`", () => {
    test("Then it should return a new state with isError set to true and a modal property with the provided text", () => {
      const modalError = "There was a problem";
      const modalPayload: ModalPayload = {
        modal: modalError,
        isError: true,
      };

      const expectedUiState: UiState = {
        ...mockUiStateNotLoading,
        isError: true,
        modal: modalError,
      };

      const activateModalAction = activateModalActionCreator(modalPayload);
      const newUiState = uiReducer(mockUiStateNotLoading, activateModalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to close the modal", () => {
    test("Then it should return a new state with isError set to false and a modal property empty", () => {
      const expectedUiState: UiState = {
        ...mockUiState,
        isError: false,
        modal: "",
      };

      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(mockUiState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to advance to next page", () => {
    test("Then it should return a new state with the current page equal to the previous page + 1", () => {
      const expectedUiState: UiState = {
        ...mockUiState,
        pagination: {
          ...mockUiState.pagination,
          current: mockUiState.pagination.current + 1,
        },
      };

      const nextPageAction = nextPageActionCreator();
      const newUiState = uiReducer(mockUiState, nextPageAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
