import React, { useCallback } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import Button from "../../components/Button";
import { useDispatch } from "react-redux";

import { logoutAC } from "../../redux/actions/action";
import { logout } from "../../redux/thunks/thunk";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const logoutHandler = useCallback(() => {
    dispatch(logout(), logoutAC());
  },[]);
  return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text>Email của bạn là :</Text>
            <Text>SDT của bạn là :</Text>
            <Text>ID của bạn là :</Text>
          </View>

          <Button text="Đăng xuất" onPress={logoutHandler} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  root: {

  },
  container: {
  },
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

export default HomeScreen;
