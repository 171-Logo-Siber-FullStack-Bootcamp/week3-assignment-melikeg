import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase/firebaseConfig";
//Gerekli modüller import edilir

const Profile = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
     <View>
        <Image
          source={require("../components/profilImage.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.loginButton}>
        <Text style={styles.loginText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontSize:15,
  },
  loginButton: {
    width: "80%",
    backgroundColor: "#EC7063",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
