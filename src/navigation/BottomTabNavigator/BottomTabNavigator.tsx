import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowRightFromBracket,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import Routes from "../routes";
import ExploreScreen from "../../screen/ExploreScreen/ExploreScreen";
import globalStyles from "../../styles/globalStyles";
import colorStyles from "../../styles/colorStyles";
import bottomTabNavigatorStyles from "./BottomTabNavigatorStyles";

const BottomTabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

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
        name={Routes.logout}
        component={ExploreScreen}
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
