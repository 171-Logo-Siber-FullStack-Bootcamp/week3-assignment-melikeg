import * as React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Users } from "../pages/Users";
import { Posts } from "../pages/Posts";
import { Profile } from "../pages/Profile";

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

//Screen names
const profile = "Profile";
const userName = "Users";
const postName = "Posts";

// Create Custom Tab Navigator
const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={profile}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "profile") {
              return (iconName = (
                <MaterialCommunityIcons
                  name="face-profile"
                  size={28}
                  color="#F1948A"
                />
              ));
            } else if (route.name === "userName") {
              return (iconName = (
                <AntDesign name="user" size={28} color="#F1948A" />
              ));
            } else if (route.name === "postName") {
              return (iconName = (
                <MaterialCommunityIcons name="post" size={28} color="#F1948A" />
              ));
            }
          },
          tabBarActiveTintColor: "#F1948A",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="userName" component={Users} />
        <Tab.Screen name="postName" component={Posts} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
