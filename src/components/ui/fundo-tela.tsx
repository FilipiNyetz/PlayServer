import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type FundoTelaProps = {
    children: ReactNode;
};

export function FundoTela({ children }: FundoTelaProps) {
    return (
        <LinearGradient colors={["#0E1647", "#0A1033"]} style={styles.container}>
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
