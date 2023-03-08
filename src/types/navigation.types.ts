import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import type Routes from "../navigation/routes";

export interface RootStackParamList {
  [Routes.login]: undefined;
  [Routes.welcome]: undefined;
}

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.login
>;
