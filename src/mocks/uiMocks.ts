import { type UiState } from "../redux/features/ui/types";
import { setupStore } from "../redux/store";

export const mockUiState: UiState = {
  isLoading: true,
  modal: "There was a problem",
  isError: true,
  pagination: { current: 0, total: 10 },
  filter: "Strategy",
};

export const mockUiStateNotLoading: UiState = {
  isLoading: false,
  modal: "",
  isError: false,
  pagination: { current: 0, total: 10 },
  filter: "",
};

export const mockUiStore = setupStore({ ui: mockUiState });
