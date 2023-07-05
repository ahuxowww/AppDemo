import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

import { addTodo, updatedTodo } from "../../redux/thunks/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(6, "Title must be at least 6 characters")
    .required("Title is required"),
  description: Yup.string().min(0),
});

const ItemScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();
  const goHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  const route = useRoute();
  const id = route.params?.id;
  const Items = useSelector((state) =>
    state.todo.todoList.find((item) => item.id === route.params?.id)
  );

  let isChecked = false;
  const dispatch = useDispatch();
  const handleTitle = useCallback(
    (data) => {
      let title = data.title;
      let description = data.description;
      if (route.params?.id) {
        dispatch(updatedTodo({ id, title, description, isChecked }));
        goHome();
        return;
      }
      dispatch(addTodo({ id, title, description, isChecked }));
      goHome();
    },
    [route.params?.id, goHome]
  );

  return (
    <View style={styles.all}> 
      <View style={styles.root}>
        <View style={styles.header}>
          <Pressable onPress={goHome}>
            <AntDesign name="back" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handleSubmit(handleTitle)}>
            <AntDesign name="save" size={24} color="white" />
          </Pressable>
        </View>
        <View style={styles.container}>
          <Text style={{color: 'white', fontWeight: '700', marginBottom: 20, fontSize: 16}}>TITLE</Text>
          <Controller
            control={control}
            name="title"
            defaultValue={Items?.title || ""}
            render={({ field: { value, onChange, onBlur } }) => (
              <>
                <View style={[styles.container]}>
                  <TextInput
                    placeholder="TITLE"
                    placeholderTextColor="#ffffff"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    style={styles.title}
                  />
                </View>
              </>
            )}
          />
          <Text>{errors.title?.message}</Text>

          <Text style={{color: 'white', fontWeight: '700', marginBottom: 20, fontSize: 16}}>DESCRIPTION</Text>
          <Controller
            control={control}
            name="description"
            defaultValue={Items?.description || ""}
            render={({ field: { value, onChange, onBlur } }) => (
              <>
                <View>
                  <TextInput
                    placeholder="DESCRIPTION"
                    placeholderTextColor="#ffffff"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    style={styles.description}
                  />
                </View>
              </>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all:{
    height: '100%',
    width: '100%',
    backgroundColor: '#2D3748',
  },
  root: {
    margin: 20,
    marginTop: 130,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  container: {},
  description: {
    height: 200,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "#A4BCC1",
    paddingLeft: 40,
  },
  title: {
    height: 50,
    backgroundColor: '#87c498',
    borderRadius: 15,
    paddingLeft: 20,
  },
});
export default ItemScreen;
