import * as React from "react";
import { LoginPage } from "./src/pages/LoginPage";
import { RegisterPage } from "./src/pages/RegisterPage"; 
import { ForgotPasswordPage } from "./src/pages/ForgotPasswordPage";
import { Main } from "./src/pages/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Gerekli modüller eklenir.

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> //Stack Navigotor ekranlar arası geçişi sağlar.
        <Stack.Screen name="LoginPage" component={LoginPage} /> //Stack.Screen ile navigator'de olmasını istediğimiz ekranları belirleriz.
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen
          name="ForgotPasswordPage"
          component={ForgotPasswordPage}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
