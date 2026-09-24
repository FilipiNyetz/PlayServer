import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

type CabecalhoListaProps = {
    titulo: string;
    total: number;
    style?: StyleProp<ViewStyle>;
};

export function CabecalhoLista({ titulo, total, style }: CabecalhoListaProps) {
    return (
        <View style={[styles.header, style]}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.total}>Total {total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titulo: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: '#DDE3F0',
    },
    total: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: '#ABB1CC',
    },
});
