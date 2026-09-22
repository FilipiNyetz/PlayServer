import { TextInput, StyleSheet } from "react-native";

type DigitInputProps = {
    value: string;
    onChangeText: (value: string) => void;
};

export function DigitInput({ value, onChangeText }: DigitInputProps) {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => onChangeText(text.replace(/[^0-9]/g, ""))}
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#495BCC"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: 48,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#243189",
        backgroundColor: "#1D2766",
        textAlign: "center",
        fontFamily: "Inter_500Medium",
        fontSize: 18,
        color: "#DDE3F0",
    },
});
