import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../config/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Settings from "../screens/Settings";
import HomeStackScreen from "./HomeStack";
import { ThemeContext } from "../context/Themecontext";
import { useContext } from "react";

const Tab = createBottomTabNavigator();

const RootStack = () => {
    const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode];


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Trending") {
              iconName = "trending-up";
            } else if (route.name === "Settings") {
              iconName = "cog";
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: activeColors.accent,
          tabBarInactiveTintColor: activeColors.tertiary,
          tabBarStyle: {
            backgroundColor: activeColors.secondary,
          },
          tabBarShowLabel: false,
          headerTitleAlign: "left",
          headerTitleStyle: {
            paddingLeft: 10,
          },
          headerStyle: {
            backgroundColor: activeColors.secondary,
          },
          headerTintColor: activeColors.tint,
        })}
      >
        <Tab.Screen
          name="Trending"
          component={HomeStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
