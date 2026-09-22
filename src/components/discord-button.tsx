import { View, Text, Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { DiscordIcon } from "@/components/icons";

type DiscordButtonProps = {
    label: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};

export function DiscordButton({ label, onPress, style }: DiscordButtonProps) {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <DiscordIcon />
            <View style={styles.divider} />
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E51C44',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
    },
    divider: {
        width: 1,
        height: 56,
        marginLeft: 16,
        backgroundColor: '#991F36',
    },
    label: {
        marginLeft: 39,
        fontFamily: 'Inter_500Medium',
        fontSize: 15,
        lineHeight: 25,
        color: '#DDE3F0',
    },
});
