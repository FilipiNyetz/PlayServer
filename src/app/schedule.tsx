import { useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenHeader } from "@/components/screen-header";
import { CategoryPicker } from "@/components/schedule/category-picker";
import { SelectedServerCard } from "@/components/schedule/selected-server-card";
import { DigitInput } from "@/components/schedule/digit-input";

export default function Schedule() {
    const [category, setCategory] = useState("ranqueada");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [description, setDescription] = useState("");

    return (
        <LinearGradient colors={["#0E1647", "#0A1033"]} style={styles.container}>
            <ScreenHeader title="Agendar partida" />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.label}>Categoria</Text>
                    <View style={styles.categories}>
                        <CategoryPicker selectedId={category} onSelect={setCategory} />
                    </View>
                </View>

                <View style={styles.section}>
                    {/* Não há necessidade de desenvolver o modal com a lista de
                    servidores — o professor pediu só essa versão com um
                    servidor já selecionado, então o card abaixo é fixo. */}
                    <SelectedServerCard
                        name="Valorosos"
                        game="Valorant"
                        cover={require('@/assets/images/home/cover-valorant.png')}
                    />
                </View>

                <View style={[styles.section, styles.dateTimeSection]}>
                    <View>
                        <Text style={styles.label}>Dia e mês</Text>
                        <View style={styles.dateTimeRow}>
                            <DigitInput value={day} onChangeText={setDay} />
                            <Text style={styles.separator}>/</Text>
                            <DigitInput value={month} onChangeText={setMonth} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>Horário</Text>
                        <View style={styles.dateTimeRow}>
                            <DigitInput value={hour} onChangeText={setHour} />
                            <Text style={styles.separator}>:</Text>
                            <DigitInput value={minute} onChangeText={setMinute} />
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.descriptionHeader}>
                        <Text style={styles.label}>Descrição</Text>
                        <Text style={styles.hint}>Max 100 caracteres</Text>
                    </View>
                    <TextInput
                        style={styles.description}
                        value={description}
                        onChangeText={setDescription}
                        maxLength={100}
                        multiline
                        placeholder="Escreva um recado para os jogadores..."
                        placeholderTextColor="#495BCC"
                    />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.scheduleButton}>
                    <Text style={styles.scheduleButtonText}>Agendar</Text>
                </Pressable>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingBottom: 24,
    },
    section: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    label: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: '#DDE3F0',
    },
    categories: {
        marginTop: 16,
        marginHorizontal: -24,
    },
    dateTimeSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateTimeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 12,
    },
    separator: {
        fontFamily: 'Inter_500Medium',
        fontSize: 15,
        color: '#ABB1CC',
    },
    descriptionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    hint: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: '#ABB1CC',
    },
    description: {
        marginTop: 12,
        height: 95,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        backgroundColor: '#1D2766',
        padding: 12,
        textAlignVertical: 'top',
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: '#DDE3F0',
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    scheduleButton: {
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E51C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scheduleButtonText: {
        fontFamily: 'Inter_500Medium',
        fontSize: 15,
        color: '#DDE3F0',
    },
});
