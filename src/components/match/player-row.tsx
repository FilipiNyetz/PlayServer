import { View, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";

export type PlayerStatus = "available" | "busy";

export type Player = {
    id: string;
    name: string;
    status: PlayerStatus;
    avatar: ImageSourcePropType;
};

const STATUS_LABEL: Record<PlayerStatus, string> = {
    available: "Disponível",
    busy: "Ocupado",
};

const STATUS_COLOR: Record<PlayerStatus, string> = {
    available: "#32BD50",
    busy: "#E51C44",
};

export function PlayerRow({ name, status, avatar }: Omit<Player, "id">) {
    return (
        <View style={styles.item}>
            <Image source={avatar} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.statusRow}>
                    <View style={[styles.dot, { backgroundColor: STATUS_COLOR[status] }]} />
                    <Text style={styles.status}>{STATUS_LABEL[status]}</Text>
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
