import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
const InputText = ({ control, name, placeholder, secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <>
          <View style={[styles.container]}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              style={styles.input}
              placeholderTextColor="#A4BCC1"
            />
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    opacity: 0.4,
    width: "100%",
    borderWidth: 0,
    borderRadius: 100,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 50,
    color: "#A4BCC1",
    paddingLeft: 50,
  },
  error: {
    color: "red",
    alignSelf: "stretch",
  },
});

export default InputText;
