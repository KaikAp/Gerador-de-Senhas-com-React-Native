import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export function PasswordList({ data, removePassword }: { data: any; removePassword: any }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{isHidden ? "********" : data}</Text>
      <Pressable onPress={() => setIsHidden(!isHidden)}>
        <Entypo name={isHidden ? "eye-with-line" : "eye"} size={24} color="white" />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 14,
    width: "100%",
    marginTop: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    color: "#fff",
  },
});
