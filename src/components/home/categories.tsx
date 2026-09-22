import { ScrollView, StyleSheet } from "react-native";
import { CategoryCard } from "./category-card";
import { CATEGORIES } from "@/data/categories-data";

export function Categories() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
        >
            {CATEGORIES.map((category) => (
                <CategoryCard key={category.id} label={category.label} icon={category.icon} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        gap: 8,
        paddingHorizontal: 24,
    },
});
