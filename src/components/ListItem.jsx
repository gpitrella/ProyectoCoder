import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ListItem = ({ item, removeItem }) => {

  return (
    <View style={styles.containerElement}>
      <Text style={styles.list}> {item.id}. {item.text} </Text> 
      <Pressable style={styles.buttonDelete} onPress={() => removeItem(item.text)}>
        <Ionicons name="trash" size={20} color="red" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerElement: {
    width: '100%',
    textAlign: 'left',
    flexDirection: 'row',
  },
  list: {
    fontSize: 20,
    marginVertical: 2,
    width: '80%',
    textAlign: 'left',
  },
});

export default ListItem;