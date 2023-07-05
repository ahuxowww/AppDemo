import React, { useCallback } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";

import { logoutAC } from "../../redux/actions/action";
import { logout } from "../../redux/thunks/thunk";
import { LinearGradient } from "expo-linear-gradient";
const Reminder = () => {
  const dispatch = useDispatch();
  const logoutHandler = useCallback(() => {
    dispatch(logout(), logoutAC());
  },[]);
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View>
          <Text>User info</Text>
          <Image source = {require('../../image/avatar.png')} />
          <Pressable style={styles.button}>
            <Text>Change profile photo</Text>
          </Pressable>
        </View>
        <View style={styles.info}>
          <LinearGradient>
            <Text>First name</Text>
            <Text></Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    margin: 20,
  },
  header: {},
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    marginTop: 200,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    marginBottom: 50,
  },
});

export default Reminder;
