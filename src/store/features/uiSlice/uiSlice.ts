import { createSlice } from "@reduxjs/toolkit";
import { type UiState } from "./types";

const initialUiState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setIsLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const { setIsLoading: setIsLoadingActionCreator } = uiSlice.actions;
