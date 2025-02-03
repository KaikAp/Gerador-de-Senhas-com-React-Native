import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../src/hooks/useStorage";
import { useState } from "react";
import { ModalSuccess } from "./modalSucess";

export function ModalPassword({
  password,
  closeModalPassword,
}: {
  password: string;
  closeModalPassword: () => void;
}) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { saveItem } = useStorage();

  async function copyPassword() {
    await Clipboard.setStringAsync(password);
  }

  async function savePassword() {
    copyPassword();
    await saveItem("@pass", password);
    closeModalPassword();
    setShowSuccessMessage(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword} onPress={copyPassword}>
          <Text style={styles.text}>{password}</Text>
          <Image
            source={require("../../src/assets/images/copiar-arquivo.png")}
            style={styles.image}
          />
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={[styles.button, styles.buttonback]}
            onPress={closeModalPassword}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={savePassword}
          >
            <Text style={styles.buttonText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalSuccess
        visible={showSuccessMessage}
        message="Senha copiada com sucesso!"
        onClose={() => setShowSuccessMessage(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    flex: 1,
  },
  buttonArea: {
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    margin: 14,
    padding: 15,
  },
  buttonText: {
    color: "#fff",
  },
  buttonSave: {
    backgroundColor: "#037dff",
    borderRadius: 100,
  },
  buttonback: {
    backgroundColor: "#ff4124",
    borderRadius: 100,
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
