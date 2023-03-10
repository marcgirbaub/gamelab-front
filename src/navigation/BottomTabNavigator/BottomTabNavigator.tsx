import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowRightFromBracket,
  faGamepad,
  faBookmark,
  faCirclePlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import Routes from "../routes";
import ExploreScreen from "../../screen/ExploreScreen/ExploreScreen";
import globalStyles from "../../styles/globalStyles";
import colorStyles from "../../styles/colorStyles";
import bottomTabNavigatorStyles from "./BottomTabNavigatorStyles";
import { useAppDispatch } from "../../store/hooks";
import { logoutUserActionCreator } from "../../store/features/userSlice/userSlice";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import useToken from "../../hooks/useToken/useToken";

const BottomTabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const dispatch = useAppDispatch();

  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { removeToken } = useToken();

  const logoutHandler = async () => {
    await removeToken();

    dispatch(logoutUserActionCreator());

    navigation.navigate(Routes.login);
  };

  return (
    <Tab.Navigator
      initialRouteName={Routes.explore}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorStyles.accent,
        tabBarInactiveTintColor: colorStyles.secondary,
        tabBarStyle: bottomTabNavigatorStyles.tabNavigator,
        tabBarLabelStyle: bottomTabNavigatorStyles.tabLabel,
      }}
      sceneContainerStyle={globalStyles.screen}
    >
      <Tab.Screen
        name={Routes.explore}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faGamepad} size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={Routes.create}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCirclePlus} size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={Routes.myLibrary}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBookmark} size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={Routes.logout}
        component={ExploreScreen}
        listeners={{ tabPress: logoutHandler }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size={size}
              color={color}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
