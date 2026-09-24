import { TextInput, StyleSheet } from "react-native";

type CampoNumericoProps = {
    value: string;
    onChangeText: (value: string) => void;
    maximo: number;
};

export function CampoNumerico({ value, onChangeText, maximo }: CampoNumericoProps) {
    function aoAlterarTexto(texto: string) {
        const digitos = texto.replace(/[^0-9]/g, "");
        if (digitos !== "" && Number(digitos) > maximo) {
            return;
        }
        onChangeText(digitos);
    }

    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={aoAlterarTexto}
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
