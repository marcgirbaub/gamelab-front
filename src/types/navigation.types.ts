import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import type Routes from "../routes/routes";

export interface RootStackParamList {
  [Routes.login]: undefined;
  [Routes.explore]: undefined;
  [Routes.register]: undefined;
  [Routes.home]: undefined;
  [Routes.detail]: undefined;
  [Routes.update]: undefined;
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
