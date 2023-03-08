import { type UiState } from "./types";
import {
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When called with the action to set isLoading to true", () => {
    test("Then it should return the new state with isLoading set to true", () => {
      const currentUiState: UiState = {
        isLoading: false,
      };
      const expectedUiState: UiState = {
        isLoading: true,
      };

      const setIsLoadingAction = setIsLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, setIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to unset isLoading to true", () => {
    test("Then it should return the new state with isLoading set to false", () => {
      const currentUiState: UiState = {
        isLoading: true,
      };
      const expectedUiState: UiState = {
        isLoading: false,
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, unsetIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
