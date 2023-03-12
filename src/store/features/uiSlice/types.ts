export interface UiState {
  isLoading: boolean;
  modal: string;
  isError: boolean;
  pagination: {
    current: number;
    total: number;
  };
}

export interface ModalPayload {
  modal: string;
  isError: boolean;
}
