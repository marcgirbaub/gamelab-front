import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: { user: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
