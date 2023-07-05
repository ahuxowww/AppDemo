import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
}
const CheckBox = (props: CheckBoxProps) => {
  const { isChecked, onPress } = props;
  const icon = isChecked ? "checkbox-marked" : "checkbox-blank";
  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={24} color="white" />
    </Pressable>
  );
};

export default CheckBox;
