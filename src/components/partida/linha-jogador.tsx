import { View, Image, Text, StyleSheet } from "react-native";
import { Jogador, StatusJogador } from "@/data/dados-jogadores";

const ROTULO_STATUS: Record<StatusJogador, string> = {
    disponivel: "Disponível",
    ocupado: "Ocupado",
};

const COR_STATUS: Record<StatusJogador, string> = {
    disponivel: "#32BD50",
    ocupado: "#E51C44",
};

export function LinhaJogador({ nome, status, avatar }: Omit<Jogador, "id">) {
    return (
        <View style={styles.item}>
            <Image source={avatar} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{nome}</Text>
                <View style={styles.statusRow}>
                    <View style={[styles.dot, { backgroundColor: COR_STATUS[status] }]} />
                    <Text style={styles.status}>{ROTULO_STATUS[status]}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingBottom: 16,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#243189",
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#243189",
    },
    name: {
        fontFamily: "Rajdhani_700Bold",
        fontSize: 18,
        color: "#DDE3F0",
    },
    statusRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 6,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    status: {
        fontFamily: "Inter_400Regular",
        fontSize: 13,
        color: "#ABB1CC",
    },
});
