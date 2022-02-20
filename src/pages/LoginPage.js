import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../style/styles";
import { auth } from "../firebase/firebaseConfig";

export default function LoginPage() {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.info("Logged in with:", user.email);
        navigation.navigate("Main");
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
          //onChangeText={(text) => this.setState({ email: text })}
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
          //onChangeText={(text) => this.setState({ password: text })}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ForgotPasswordPage", {
            name: "ForgotPassswordPage",
          })
        }
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RegisterPage", { name: "RegisterPage" })
        }
      >
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
