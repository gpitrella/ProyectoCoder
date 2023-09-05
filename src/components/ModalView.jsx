import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React from "react";

const ModalView = ({ transparent, isModalVisible, clearList, setIsModalVisible }) => {
  return (
    <Modal transparent={transparent} visible={isModalVisible} >
      <View style={styles.modalDelete}>
        <Text style={styles.deleteText}> ¿Deseas eliminar la lista completa? </Text>
          <View style={styles.deleteChoice}> 
          <Pressable onPress={() => clearList()}>
            <Text style={styles.deleteTextChoice}>SI</Text>
          </Pressable>

          <Pressable onPress={() => setIsModalVisible(false)}>
            <Text style={styles.deleteTextChoice}> NO </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalDelete: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#FFFFFF',
    width: '100%'
  },
  deleteChoice: {
    flexDirection: 'row',
    gap: 30,
    padding: 20,
  },
  deleteText: {
    fontSize: 18
  },
  deleteTextChoice: {
    fontSize: 18,
    fontWeight: 600
  },
});

export default ModalView;