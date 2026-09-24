import { ScrollView, Pressable, Image, Text, StyleSheet } from "react-native";
import { CATEGORIAS } from "@/data/dados-categorias";

type SeletorCategoriaProps = {
    idSelecionado: string;
    aoSelecionar: (id: string) => void;
};

export function SeletorCategoria({ idSelecionado, aoSelecionar }: SeletorCategoriaProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
        >
            {CATEGORIAS.map((categoria) => {
                const selecionada = categoria.id === idSelecionado;
                return (
                    <Pressable
                        key={categoria.id}
                        style={[styles.card, !selecionada && styles.cardUnselected]}
                        onPress={() => aoSelecionar(categoria.id)}
                    >
                        <Image source={categoria.icone} style={styles.icon} />
                        <Text style={styles.label}>{categoria.rotulo}</Text>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        gap: 8,
    },
    card: {
        width: 104,
        height: 120,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#243189",
        backgroundColor: "#1D2766",
        alignItems: "center",
        paddingTop: 20,
    },
    cardUnselected: {
        opacity: 0.5,
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
