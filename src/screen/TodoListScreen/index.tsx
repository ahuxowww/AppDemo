import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import TodoItem from "../../components/TodoItem";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../redux/thunks/todoSlice";

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Items = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const goDetail = useCallback(() => {
    navigation.navigate("ItemScreen");
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.titleapp}>TODO APP</Text>

        <FlatList
          data={Items}
          renderItem={({ item }) => <TodoItem todo={item} />}
          style={{ width: "100%" }}
        />

      </View>
      <View style={styles.icon}>
          <Pressable onPress={goDetail}>
            <AntDesign name="pluscircleo" size={40} color="white" />
          </Pressable>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: '#2D3748'
  },
  container: {
    marginTop: 70,
    margin: 20,
    height: '80%',
  },
  icon: {
    alignItems: "center",
    height: 40,
    color: 'white'
  },
  titleapp: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
    color: 'white'
  },
});

export default TodoListScreen;
