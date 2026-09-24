import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Modal, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { BotaoPrimario } from "@/components/ui/botao-primario";

type SeletorHorarioProps = {
    hora: string;
    minuto: string;
    aoAlterarHorario: (hora: string, minuto: string) => void;
};

function formatarHorario(data: Date) {
    return {
        hora: String(data.getHours()).padStart(2, "0"),
        minuto: String(data.getMinutes()).padStart(2, "0"),
    };
}

export function SeletorHorario({ hora, minuto, aoAlterarHorario }: SeletorHorarioProps) {
    const [visivel, setVisivel] = useState(false);

    const valor = new Date();
    valor.setHours(Number(hora) || 0, Number(minuto) || 0, 0, 0);

    function abrir() {
        if (!hora || !minuto) {
            const formatado = formatarHorario(valor);
            aoAlterarHorario(formatado.hora, formatado.minuto);
        }
        setVisivel(true);
    }

    function aoAlterar(evento: DateTimePickerEvent, selecionado?: Date) {
        if (Platform.OS === "android") {
            setVisivel(false);
        }
        if (evento.type === "set" && selecionado) {
            const formatado = formatarHorario(selecionado);
            aoAlterarHorario(formatado.hora, formatado.minuto);
        }
    }

    return (
        <>
            <Pressable style={styles.row} onPress={abrir}>
                <View style={styles.box}>
                    <Text style={hora ? styles.digits : styles.placeholder}>{hora || "00"}</Text>
                </View>
                <Text style={styles.separator}>:</Text>
                <View style={styles.box}>
                    <Text style={minuto ? styles.digits : styles.placeholder}>{minuto || "00"}</Text>
                </View>
            </Pressable>

            {visivel && Platform.OS === "android" && (
                <DateTimePicker mode="time" value={valor} is24Hour onChange={aoAlterar} />
            )}

            {Platform.OS === "ios" && (
                <Modal visible={visivel} transparent animationType="slide">
                    <View style={styles.overlay}>
                        <View style={styles.sheet}>
                            <DateTimePicker
                                mode="time"
                                value={valor}
                                display="spinner"
                                themeVariant="dark"
                                locale="pt-BR"
                                onChange={aoAlterar}
                            />
                            <BotaoPrimario rotulo="Confirmar" onPress={() => setVisivel(false)} />
                        </View>
                    </View>
                </Modal>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    box: {
        width: 48,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#243189",
        backgroundColor: "#1D2766",
        alignItems: "center",
        justifyContent: "center",
    },
    digits: {
        fontFamily: "Inter_500Medium",
        fontSize: 18,
        color: "#DDE3F0",
    },
    placeholder: {
        fontFamily: "Inter_500Medium",
        fontSize: 18,
        color: "#495BCC",
    },
    separator: {
        fontFamily: "Inter_500Medium",
        fontSize: 15,
        color: "#ABB1CC",
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(10, 16, 51, 0.7)",
    },
    sheet: {
        paddingBottom: 40,
        paddingHorizontal: 24,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: "#1D2766",
    },
});
