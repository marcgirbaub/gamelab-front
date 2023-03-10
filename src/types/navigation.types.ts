import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import type Routes from "../navigation/routes";

export interface RootStackParamList {
  [Routes.login]: undefined;
  [Routes.explore]: undefined;
  [Routes.register]: undefined;
  [Routes.home]: undefined;
}

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.login,
  Routes.register
>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.login
>;
