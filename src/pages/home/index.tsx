import Slider from "@react-native-community/slider";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable, Linking } from "react-native";
import { useState } from "react";
import { ModalPassword } from "@/components/modals/modalPassword";

export function Home() {
  const [size, setSize] = useState(6); 
  const [passWord, setPassword] = useState("");
  const [modalPasswordVisible, setModalPasswordVisible] = useState(false) 

  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function gerarSenha() {
    let senha = "";
    for (let i = 0; i < size; i++) {
      const indice = Math.floor(Math.random() * charset.length);
      senha += charset[indice];
    }
    setPassword(senha);
    setModalPasswordVisible(true);
  }

  function openLink(){
    Linking.openURL("https://github.com/KaikAp")
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../src/assets/images/logo.png")}
        style={styles.imagem}
      />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          step={1}
          maximumTrackTintColor="#262626"
          minimumTrackTintColor="#35b3fc"
          thumbTintColor="#0287d4"
          value={0}
          onValueChange={(value) => setSize(Math.round(value))} 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}>Gerar senha</Text>
      </TouchableOpacity>
      <Modal visible={modalPasswordVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passWord} closeModalPassword={() => setModalPasswordVisible(false)}/>
      </Modal>
      <View style={styles.footer}>
        <Text>Criado por {""}</Text>
        <Pressable onPress={openLink}>
        <Text style={styles.link}>Kaik Silva</Text>
        </Pressable>
        </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f5f0",
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    height: 200,
    resizeMode: "contain",
  },

  area: {
    marginBottom: 14,
    marginTop: 14,
    width: "80%",
    backgroundColor: "#ffff",
    borderRadius: 100,
    padding: 8,
  },

  button: {
    backgroundColor: "#027abf",
    borderRadius: 100,
    padding: 15,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "white",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "NotoSansThai-VariableFont",
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    alignItems: "center",
    flexDirection: "row"
  },
  link:{
    color: "blue",
    textDecorationLine: "underline",
  }
});
