import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ModalPayload, type UiState } from "./types";

export const initialUiState: UiState = {
  isLoading: false,
  modal: "",
  isError: false,
  pagination: { current: 0, total: 0 },
  filter: "",
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
    nextPage: (currentUiState): UiState => ({
      ...currentUiState,
      pagination: {
        ...currentUiState.pagination,
        current: currentUiState.pagination.current + 1,
      },
    }),
    resetToInitialState: (): UiState => ({ ...initialUiState }),
    loadTotalNumberPages: (
      currenUiState,
      action: PayloadAction<number>
    ): UiState => ({
      ...currenUiState,
      pagination: { ...currenUiState.pagination, total: action.payload },
    }),
    addFilter: (currentUiState, action: PayloadAction<string>): UiState => ({
      ...currentUiState,
      filter: action.payload,
      pagination: { ...currentUiState.pagination, current: 0 },
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  activateModal: activateModalActionCreator,
  closeModal: closeModalActionCreator,
  nextPage: nextPageActionCreator,
  resetToInitialState: resetToInitialStateActionCreator,
  loadTotalNumberPages: loadTotalNumberPagesActionCreator,
  addFilter: addFilterActionCreator,
} = uiSlice.actions;
