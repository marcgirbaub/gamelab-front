import {
  configureStore,
  type ThunkAction,
  type Action,
  combineReducers,
  type PreloadedState,
} from "@reduxjs/toolkit";
import { gamesReducer } from "./features/games/gamesSlice";
import { uiReducer } from "./features/ui/uiSlice";
import { userReducer } from "./features/user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  games: gamesReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
