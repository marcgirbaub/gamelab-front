import React, { type PropsWithChildren } from "react";
import { type PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { type RootState, setupStore, store } from "../store/store";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => (
    <Provider store={testStore}>{children}</Provider>
  );

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
