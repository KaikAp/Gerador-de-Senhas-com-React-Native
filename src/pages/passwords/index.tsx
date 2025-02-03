import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "@/src/hooks/useStorage";
import { PasswordList } from "./components/passwordList";
import { ModalConfirmacao } from "@/components/modals/modalConfirmacao";

export function Password() {
  const [listPasswords, setListPasswords] = useState([]);
  const [selectedPassword, setSelectedPassword] = useState(null);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadPasswords() {
      const passwords = (await getItem("@pass")) || [];
      setListPasswords(passwords);
    }
    loadPasswords();
  }, [focused]);

  async function deletePassword() {
    if (selectedPassword) {
      let passwords = (await removeItem("@pass", selectedPassword)) || [];
      setListPasswords(passwords);
    }
    setModalVisible(false);
  }

  function confirmDeletePassword(item: any) {
    setSelectedPassword(item);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> Lista de senhas</Text>
      </View>

      <View>
        <FlatList
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordList
              data={item}
              removePassword={() => confirmDeletePassword(item)}
            />
          )}
        />
        <ModalConfirmacao
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onConfirm={() => deletePassword()}
          title="Excluir"
          descricao="Deseja mesmo excluir a senha?"
          confimarName="Excluir"
          colorButton="red"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f5f0",
  },

  header: {
    backgroundColor: "#027abf",
    padding: 14,
    paddingTop: 50,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});
