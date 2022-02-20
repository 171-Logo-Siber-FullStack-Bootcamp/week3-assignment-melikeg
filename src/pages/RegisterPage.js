import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../style/styles";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase/firebaseConfig";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const HandleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.info("Registered with:", user.email);
        navigation.navigate("LoginPage");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(219,195,252,1)", "rgba(180,196,252,1)", "transparent"]}
        style={styles.background}
      />
      <View>
        <Image
          source={require("../components/logo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          value={email}
          placeholderTextColor="#e0e0e0"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          value={password}
          placeholderTextColor="#e0e0e0"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={HandleSignUp}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginPage", { name: "LoginPage" })}
      >
        <Text style={styles.loginText}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}
