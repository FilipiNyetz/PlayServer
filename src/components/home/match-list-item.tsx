import { View, Image, Text, Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import { CalendarIcon, PersonIcon } from "@/components/icons";

export type MatchRole = "host" | "guest";

export type Match = {
    id: string;
    title: string;
    description: string;
    category: string;
    role: MatchRole;
    date: string;
    cover: ImageSourcePropType;
};

const ROLE_LABEL: Record<MatchRole, string> = {
    host: "Anfitrião",
    guest: "Visitante",
};

const ROLE_COLOR: Record<MatchRole, string> = {
    host: "#E51C44",
    guest: "#32BD50",
};

type MatchListItemProps = Omit<Match, "id" | "description"> & {
    onPress?: () => void;
};

export function MatchListItem({ title, category, role, date, cover, onPress }: MatchListItemProps) {
    return (
        <Pressable style={styles.item} onPress={onPress}>
            <Image source={cover} style={styles.cover} />
            <View style={styles.info}>
                <View style={styles.topRow}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <Text style={styles.category}>{category}</Text>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.tag}>
                        <CalendarIcon />
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <View style={styles.tag}>
                        <PersonIcon color={ROLE_COLOR[role]} />
                        <Text style={[styles.role, { color: ROLE_COLOR[role] }]}>
                            {ROLE_LABEL[role]}
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
        justifyContent: "space-between",
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
        marginTop: 12,
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
