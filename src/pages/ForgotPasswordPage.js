import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { styles } from "../style/styles";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const handleSend = () => {
    console.info("The new password has been sent to your e-mail.");
    navigation.navigate("LoginPage");
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
          placeholder="Please enter your email"
          value={email}
          placeholderTextColor="#e0e0e0"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.remindPasswordButton}
        onPress={handleSend}
      >
        <Text style={styles.remindPassword}>REMIND MY PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}
