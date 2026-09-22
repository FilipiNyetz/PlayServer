import { ScrollView, Pressable, Image, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "@/data/categories-data";

type CategoryPickerProps = {
    selectedId: string;
    onSelect: (id: string) => void;
};

export function CategoryPicker({ selectedId, onSelect }: CategoryPickerProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
        >
            {CATEGORIES.map((category) => {
                const selected = category.id === selectedId;
                return (
                    <Pressable
                        key={category.id}
                        style={[styles.card, !selected && styles.cardUnselected]}
                        onPress={() => onSelect(category.id)}
                    >
                        <Image source={category.icon} style={styles.icon} />
                        <Text style={styles.label}>{category.label}</Text>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        gap: 8,
        paddingHorizontal: 24,
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
