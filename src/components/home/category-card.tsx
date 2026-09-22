import { Image, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type Category = {
    id: string;
    label: string;
    icon: ImageSourcePropType;
};

// O que é o Omit?
// Resposta: Omit<Tipo, "chave"> é um utility type do TypeScript que pega um
// tipo existente e devolve uma cópia dele SEM as chaves listadas.
// Aqui, "Category" tem { id, label, icon }, mas o componente CategoryCard
// não usa o "id" (ele só serve de "key" React lá no .map() de categories.tsx).
// Então em vez de escrever um tipo novo do zero repetindo label e icon,
// reaproveitamos Category e removemos só o id: Omit<Category, "id">.
export function CategoryCard({ label, icon }: Omit<Category, "id">) {
    return (
        <LinearGradient colors={["#171F52", "#1D2766"]} style={styles.card}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 104,
        height: 120,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#243189",
        alignItems: "center",
        paddingTop: 20,
    },
    icon: {
        width: 48,
        height: 48,
    },
    label: {
        marginTop: 16,
        fontFamily: "Rajdhani_700Bold",
        fontSize: 15,
        color: "#DDE3F0",
    },
});
