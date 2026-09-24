import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { IconeCalendario, IconePessoa } from "@/components/ui/icones";
import { Partida, PapelPartida } from "@/data/dados-partidas";

const ROTULO_PAPEL: Record<PapelPartida, string> = {
    anfitriao: "Anfitrião",
    visitante: "Visitante",
};

const COR_PAPEL: Record<PapelPartida, string> = {
    anfitriao: "#E51C44",
    visitante: "#32BD50",
};

type ItemPartidaProps = Omit<Partida, "id" | "descricao"> & {
    onPress?: () => void;
};

export function ItemPartida({ titulo, categoria, papel, data, capa, onPress }: ItemPartidaProps) {
    return (
        <Pressable style={styles.item} onPress={onPress}>
            <Image source={capa} style={styles.cover} />
            <View style={styles.info}>
                <View style={styles.topRow}>
                    <Text style={styles.title} numberOfLines={1}>{titulo}</Text>
                    <Text style={styles.category}>{categoria}</Text>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.tag}>
                        <IconeCalendario />
                        <Text style={styles.date}>{data}</Text>
                    </View>
                    <View style={styles.tag}>
                        <IconePessoa cor={COR_PAPEL[papel]} />
                        <Text style={[styles.role, { color: COR_PAPEL[papel] }]}>
                            {ROTULO_PAPEL[papel]}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        paddingBottom: 16,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#243189",
    },
    cover: {
        width: 64,
        height: 68,
        borderRadius: 8,
        marginRight: 20,
    },
    info: {
        flex: 1,
        justifyContent: "center",
    },
    topRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 8,
    },
    title: {
        flexShrink: 1,
        fontFamily: "Rajdhani_700Bold",
        fontSize: 18,
        color: "#DDE3F0",
    },
    category: {
        fontFamily: "Inter_400Regular",
        fontSize: 13,
        color: "#ABB1CC",
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
    },
    tag: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    date: {
        fontFamily: "Inter_500Medium",
        fontSize: 13,
        color: "#DDE3F0",
    },
    role: {
        fontFamily: "Inter_400Regular",
        fontSize: 13,
    },
});
