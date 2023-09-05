import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AddItem = ({ text, setText, addItem }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agrega un Producto..."
          style={styles.input}
          value={text}
          onChangeText={(value) => setText(value)}
        />
      </View>
      <Pressable style={styles.button} onPress={() => addItem()}>
        <Ionicons name="add-circle-outline" size={40} color="#149914" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    paddingLeft: 10,
    paddingBottom:10,
    fontSize: 16,
    width: 200,
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 20,
    borderColor: "dbdbdb",
    borderWidth: 1,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    marginLeft: 15,
  },
});

export default AddItem;