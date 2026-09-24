import { View, Image, Text, Pressable, StyleSheet, ImageSourcePropType } from "react-native";

type CartaoServidorSelecionadoProps = {
    nome: string;
    jogo: string;
    capa: ImageSourcePropType;
    onPress?: () => void;
};

export function CartaoServidorSelecionado({ nome, jogo, capa, onPress }: CartaoServidorSelecionadoProps) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Image source={capa} style={styles.cover} />
            <View style={styles.info}>
                <Text style={styles.name}>{nome}</Text>
                <Text style={styles.game}>{jogo}</Text>
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
