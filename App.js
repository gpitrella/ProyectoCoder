import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddItem from "./src/components/AddItem";
import ListItem from "./src/components/ListItem";
import ModalView from "./src/components/ModalView";

const initialState = [
  { id: 1, text: "Harina" },
  { id: 2, text: "Azucar" },
  { id: 3, text: "Cereales" },
];

export default function App() {
    const [text, setText] = useState("");
  
    const [list, setList] = useState(initialState);
  
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const addItem = () => {
      list.push({
        id: list.length + 1,
        text: text,
      });
  
      setList(list);
      setText("");
    };
    const removeItem = (itemRemoved) => {
      const filterList = list.filter(element => element.text !== itemRemoved);
 
      setList(filterList);
      setText("");
    };
  
    const clearList = () => {
      setList([]);
      setIsModalVisible(false);
    };
  
    return (
      <View style={styles.contenedor}>
        <View style={styles.mainTopContent} >
          <Image
            style={styles.imagen}
            source={require('./assets/checklist.png')}
          />  
          <Text style={styles.titulo}> Lista de Compras </Text>
        </View>
        <AddItem text={text} setText={setText} addItem={addItem} />
        { list.length > 0 
        ? <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} removeItem={removeItem}/>}
          style={styles.flatList}
        /> 
        : <Text style={styles.flatList}>Todavía no tenes ningun producto agregado a la lista.</Text>}
      
        <Pressable style={styles.buttonDelete} onPress={() => setIsModalVisible(true)}>
          <Ionicons name="trash" size={40} color="red" />
        </Pressable>
        <ModalView transparent={true} isModalVisible={isModalVisible} clearList={clearList} setIsModalVisible={setIsModalVisible}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    contenedor: {
      alignItems: "center",
      marginTop: 0,
      margin: 'auto',
      height: '100%',
    },
    titulo: {
      marginTop: 35,
      fontSize: 25,
      fontWeight: 'bold'
    },  
    imagen: {
      height: 70,
      width: 70,
      marginTop: 40,
    },
    mainTopContent: {
      flexDirection: 'row',
      alignItems: "center"
    },
    flatList: {
      width: '100%',
      marginLeft: 20,
    },
    buttonDelete: {
      position: 'absolute',
      bottom: 10
    }
});