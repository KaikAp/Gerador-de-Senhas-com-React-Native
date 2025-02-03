import { useEffect } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";

interface ModalSuccessProps {
    visible: boolean;
    message: string;
    onClose: () => void;
}

export function ModalSuccess({ visible, message, onClose }: ModalSuccessProps) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <View style={styles.successModal}>
                <Text style={styles.successText}>{message}</Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    successModal: {
        position: "absolute",
        bottom: 100,
        alignSelf: "center",
        backgroundColor: "#027abf",
        padding: 15,
        borderRadius: 10,
    },
    successText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
});
