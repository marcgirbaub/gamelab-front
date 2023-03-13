import { mockUiState, mockUiStateNotLoading } from "../../../mocks/uiMocks";
import { type ModalPayload, type UiState } from "./types";
import {
  activateModalActionCreator,
  addFilterActionCreator,
  closeModalActionCreator,
  initialUiState,
  loadTotalNumberPagesActionCreator,
  nextPageActionCreator,
  resetToInitialStateActionCreator,
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

  describe("When called with the action to reset the state to the initial state", () => {
    test("Then it should return a new state equal to the initial state", () => {
      const resetAction = resetToInitialStateActionCreator();
      const newUiState = uiReducer(mockUiState, resetAction);

      expect(newUiState).toStrictEqual(initialUiState);
    });
  });

  describe("When called with the action to load the total number of pages with number 4", () => {
    test("Then it should return a new state with the total number of pages set to 4", () => {
      const totalPages = 4;
      const expectedUiState: UiState = {
        ...mockUiState,
        pagination: { ...mockUiState.pagination, total: totalPages },
      };

      const loadNumberPagesAction =
        loadTotalNumberPagesActionCreator(totalPages);
      const newUiState = uiReducer(mockUiState, loadNumberPagesAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to add the filter `Action`", () => {
    test("Then it should return a new state with the filter set to `Action`", () => {
      const categoryFilter = "Action";
      const expectedUiState: UiState = {
        ...mockUiState,
        pagination: { ...mockUiState.pagination, current: 0 },
        filter: categoryFilter,
      };

      const addFilterAction = addFilterActionCreator(categoryFilter);
      const newUiState = uiReducer(mockUiState, addFilterAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
