import { type UiState } from "../store/features/uiSlice/types";
import { setupStore } from "../store/store";

export const mockUiState: UiState = {
  isLoading: true,
  modal: "There was a problem",
  isError: true,
  pagination: { current: 0, total: 10 },
};

export const mockUiStore = setupStore({ ui: mockUiState });
