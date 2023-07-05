import React, { useCallback, useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Alert } from "react-native";
import CheckBox from "../CheckBox";
import Textbt from "../Textbt";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { deletedTodo } from "../../redux/thunks/todoSlice";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";
const windowWidth = Dimensions.get("window").width;

interface TodoItemProps {
  todo: {
    id: String;
    title: String;
    isChecked: boolean;
  };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isCheck, setCheck] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) {
      setCheck(todo.isChecked);
    }
  }, [todo]);

  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate("ItemScreen", { id: todo.id });
  }, []);

  const createTwoButtonAlert = useCallback(
    () =>
      Alert.alert("Confirm delete", "DELETE TODO", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(deletedTodo({ id: todo.id })) },
      ]),
    []
  );


  return (
    <View style={styles.form}>
      <CheckBox
        isChecked={isCheck}
        onPress={() => {
          setCheck(!isCheck);
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "91%",
          justifyContent: "space-between",
        }}
      >
        <Textbt text={todo.title} onPress={onPress} />
        {isCheck === true ? (
          <Pressable style={styles.delete} onPress={createTwoButtonAlert}>
            <AntDesign name="delete" size={24} color="white" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    marginVertical: 10,
    width: windowWidth * 0.9,
  },
  title: {
    flex: 1,
    color: "white",
    fontSize: 18,
    marginLeft: 7,
    padding: 10,
  },
  delete: {},
});

export default TodoItem;
