import jwt from "jwt-decode";
import { type CustomTokenPayload } from "../hooks/useUser/types";
import { type User } from "../store/features/userSlice/types";

const decodeToken = (token: string): User => {
  const { id, username }: CustomTokenPayload = jwt(token);

  const user: User = {
    token,
    id,
    username,
  };

  return user;
};

export default decodeToken;
