import { Text, Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";

type BotaoPrimarioProps = {
    rotulo: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};

export function BotaoPrimario({ rotulo, onPress, style }: BotaoPrimarioProps) {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.label}>{rotulo}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E51C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: 'Inter_500Medium',
        fontSize: 15,
        color: '#DDE3F0',
    },
});
