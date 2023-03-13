import jwt from "jwt-decode";
import { type CustomTokenPayload } from "../hooks/useUser/types";
import { type User } from "../redux/features/user/types";

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
