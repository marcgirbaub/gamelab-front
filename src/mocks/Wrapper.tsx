import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default Wrapper;
