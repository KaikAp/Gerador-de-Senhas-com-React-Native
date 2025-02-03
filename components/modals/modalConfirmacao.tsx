import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";



interface ModalConfirmacaoProps {
    visible: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    title: string
    descricao: string;
    confimarName: string;
    colorButton: string;
}

export function ModalConfirmacao({ visible, onCancel, onConfirm, title, descricao, confimarName, colorButton }: ModalConfirmacaoProps) {
    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onCancel}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalText}>{descricao}</Text>

                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.deleteButton, { backgroundColor: colorButton }]} onPress={onConfirm}>
                            <Text style={styles.deleteText}>{confimarName}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: 300,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    cancelButton: {
        flex: 1,
        padding: 10,
        backgroundColor: "#ccc",
        borderRadius: 5,
        marginRight: 5,
        alignItems: "center",
    },
    cancelText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    deleteButton: {
        flex: 1,
        padding: 10,
        backgroundColor: "#d9534f",
        borderRadius: 5,
        marginLeft: 5,
        alignItems: "center",
    },
    deleteText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
});
