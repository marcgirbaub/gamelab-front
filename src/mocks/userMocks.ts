import {
  type CustomTokenPayload,
  type UserCredentials,
  type UserRegisterCredentials,
} from "../hooks/useUser/types";

export const mockUserCredentials: UserCredentials = {
  username: "marc10",
  password: "marc12345",
};

export const mockToken = "asdjfh3425kjlhsafkdh3k2h32";

export const mockTokenPayload: CustomTokenPayload = {
  id: "34523463456",
  username: "marc10",
};

export const mockUserToRegister: UserRegisterCredentials = {
  username: mockUserCredentials.username,
  password: mockUserCredentials.password,
  email: "marc@example.com",
};

export const mockUserToLogin = {
  username: mockUserCredentials.username,
  id: mockTokenPayload.id,
  token: mockToken,
};
