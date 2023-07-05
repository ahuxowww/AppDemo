import React, { useCallback, useEffect, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updatequantity } from "../../redux/thunks/cartSlice";

interface CartProductProps {
  cartItem: {
    id: string;
    quantity: number;
    title: string;
    image: string;
    price: number;
    ischeck: boolean;
  };
}

const CartProduct = ({ cartItem }: CartProductProps) => {
  const [quantity, setquantity] = useState(cartItem.quantity);
  const id = cartItem.id;
  const onMinus = () => {
    if (quantity == 1) {
      Alert.alert("Confirm delete", "DELETE ITEM", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteCart({ id }));
          },
        },
      ]);
    }
    setquantity(Math.max(1, quantity - 1));
  };
  const onPlus = () => {
    setquantity(quantity + 1);
  };
  const [ischeck, setCheck] = useState(cartItem.ischeck);
  const dispatch = useDispatch();
  const updateQuantity = () => {
    dispatch(updatequantity({ id, quantity, ischeck }));
  };

  useEffect(() => {
    updateQuantity();
  }, [quantity, ischeck]);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
        <Pressable
          onPress={() => {
            setCheck(!ischeck);
          }}
        >
          {ischeck === true ? (
            <MaterialCommunityIcons
              name="checkbox-marked-outline"
              size={24}
              color="black"
            />
          ) : (
            <MaterialCommunityIcons
              name="checkbox-blank-outline"
              size={24}
              color="black"
            />
          )}
        </Pressable>
        <Image
          source={{
            uri: cartItem.image,
          }}
          style={{ height: 80, width: 80, resizeMode: "contain", flex: 2 }}
        />
        <View style={{ flex: 3 }}>
          <Text>{cartItem.title}</Text>
          <Text>{cartItem.price}</Text>
          <View style={styles.quantity}>
            <Pressable
              onPress={() => {
                onMinus();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.numberquantity}>{quantity}</Text>
            <Pressable
              onPress={() => {
                onPlus();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    width: 100,
  },
  numberquantity: {
    color: "#007eb9",
  },
  buttonText: {
    fontSize: 18,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
});

export default CartProduct;
