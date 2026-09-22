import { ReactNode } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { BackIcon } from "@/components/icons";

type ScreenHeaderProps = {
    title: string;
    right?: ReactNode;
};

export function ScreenHeader({ title, right }: ScreenHeaderProps) {
    return (
        <LinearGradient colors={["#171F52", "#1D2766"]} style={styles.header}>
            <Pressable onPress={() => router.back()} hitSlop={12}>
                <BackIcon />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <Pressable hitSlop={12} style={styles.right}>
                {right}
            </Pressable>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 104,
        paddingTop: 56,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 20,
        color: '#DDE3F0',
    },
    right: {
        width: 24,
        height: 24,
    },
});
