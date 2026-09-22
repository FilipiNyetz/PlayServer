import { View, Image, Text, Pressable, StyleSheet, ImageSourcePropType } from "react-native";

type SelectedServerCardProps = {
    name: string;
    game: string;
    cover: ImageSourcePropType;
    onPress?: () => void;
};

export function SelectedServerCard({ name, game, cover, onPress }: SelectedServerCardProps) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Image source={cover} style={styles.cover} />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.game}>{game}</Text>
            </View>
            <Text style={styles.chevron}>{'›'}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        height: 68,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#243189",
        paddingRight: 16,
    },
    cover: {
        width: 64,
        height: 68,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontFamily: "Rajdhani_700Bold",
        fontSize: 18,
        color: "#DDE3F0",
    },
    game: {
        marginTop: 4,
        fontFamily: "Inter_400Regular",
        fontSize: 13,
        color: "#ABB1CC",
    },
    chevron: {
        fontSize: 20,
        color: "#DDE3F0",
    },
});
