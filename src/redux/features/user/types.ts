export interface User {
  username: string;
  token: string;
  id: string;
}

export interface UserState extends User {
  isLogged: boolean;
}
