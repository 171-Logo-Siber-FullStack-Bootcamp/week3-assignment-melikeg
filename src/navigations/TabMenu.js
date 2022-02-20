import * as React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"; //Gerekli kütüphaneler eklenir.
import { Users } from "../pages/Users";
import { Posts } from "../pages/Posts";
import { Profile } from "../pages/Profile"; //Bottom Navigation'da olacak sayfalar eklenir.

const Tab = createBottomTabNavigator(); 
// Bottom Tab Navigator nesnesi oluşturulur.

const profile = "Profile";
const userName = "Users";
const postName = "Posts"; //Sayfa isimleri


const Tabs = () => { 
  //Navigator fonksiyonu oluşturulur.
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={profile} //Açılacak ilk sayfa belirlenir.
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "profile") { 
              return (iconName = (
                <MaterialCommunityIcons 
                  name="face-profile"
                  size={28}
                  color="#F1948A"
                /> //bottom nav iconları özelleştirilir.
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
          tabBarActiveTintColor: "#F1948A", //alt sekmelerden aktif olma ve olmama durumu özelleştirilir.
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
