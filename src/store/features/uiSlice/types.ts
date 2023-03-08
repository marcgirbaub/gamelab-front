export interface UiState {
  isLoading: boolean;
  modal: string;
  isError: boolean;
}

export interface ModalPayload {
  modal: string;
  isError: boolean;
}
