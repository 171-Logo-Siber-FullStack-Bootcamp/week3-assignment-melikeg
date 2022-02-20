import React, { useState, useEffect } from "react";
// Importing components from react-native library.
import { View, Text, StyleSheet, FlatList } from "react-native";
import api from "../services/api";
import { styles } from "../style/styles";

const Users = () => {
  const [datas, setDatas] = useState(false);

  const getData = async () => {
    await api
      .get("/users")
      .then((response) => {
        setDatas(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    // Using react-natives built in components.
    <View style={styles.dataBackground}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>NAMES OF USERS</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={datas}
        renderItem={({ item }) => (
          <Text style={styles.dataItemUsers}>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default Users;
