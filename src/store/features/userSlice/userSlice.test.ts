import { type User, type UserState } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

const initialState: UserState = {
  username: "",
  isLogged: false,
  token: "",
  id: "",
};

describe("Given a userReducer reducer", () => {
  describe("When it receives a user and the action to login this user", () => {
    test("Then it should return the userState with the isLogged proprerty set to true and its username, id and token", () => {
      const user: User = {
        username: "marc",
        token: "123lj3445321jhkh34ojhisj",
        id: "",
      };
      const expectedUserState: UserState = {
        username: user.username,
        token: user.token,
        id: user.id,
        isLogged: true,
      };

      const logingUserAction = loginUserActionCreator(user);
      const newUserState = userReducer(initialState, logingUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
