import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ModalPayload, type UiState } from "./types";

const initialUiState: UiState = {
  isLoading: false,
  modal: "",
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setIsLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),
    unsetIsLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: false,
    }),
    activateModal: (
      currentUiState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentUiState,
      isError: action.payload.isError,
      modal: action.payload.modal,
    }),
    closeModal: (currentUiState): UiState => ({
      ...currentUiState,
      modal: initialUiState.modal,
      isError: initialUiState.isError,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  activateModal: activateModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
