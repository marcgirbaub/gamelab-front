import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User, type UserState } from "./types";

const initialUserState: UserState = {
  username: "",
  token: "",
  id: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>): UserState => ({
      ...currentUserState,
      isLogged: true,
      username: action.payload.username,
      token: action.payload.token,
      id: action.payload.id,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
