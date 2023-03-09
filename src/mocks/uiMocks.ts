import { type UiState } from "../store/features/uiSlice/types";
import { setupStore } from "../store/store";

export const mockUiState: UiState = {
  isLoading: true,
  modal: "There was a problem",
  isError: true,
};

export const mockUiStore = setupStore({ ui: mockUiState });
