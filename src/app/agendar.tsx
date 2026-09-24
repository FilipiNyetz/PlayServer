import { SeletorCategoria } from "@/components/seletor-categoria";
import { CampoNumerico } from "@/components/agendar/campo-numerico";
import { CartaoServidorSelecionado } from "@/components/agendar/cartao-servidor-selecionado";
import { SeletorHorario } from "@/components/agendar/seletor-horario";
import { FundoTela } from "@/components/ui/fundo-tela";
import { CabecalhoTela } from "@/components/ui/cabecalho-tela";
import { BotaoPrimario } from "@/components/ui/botao-primario";
import { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function AgendarPartida() {
    const [categoria, setCategoria] = useState("ranqueada");
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [hora, setHora] = useState("");
    const [minuto, setMinuto] = useState("");
    const [descricao, setDescricao] = useState("");
    const scrollRef = useRef<ScrollView>(null);

    function rolarParaDescricao() {
        setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 300);
    }

    return (
        <FundoTela>
            <CabecalhoTela titulo="Agendar partida" />

            <KeyboardAvoidingView
                style={styles.form}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    ref={scrollRef}
                    contentContainerStyle={styles.content}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.section}>
                        <Text style={styles.label}>Categoria</Text>
                        <View style={styles.categories}>
                            <SeletorCategoria idSelecionado={categoria} aoSelecionar={setCategoria} />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <CartaoServidorSelecionado
                            nome="Valorosos"
                            jogo="Valorant"
                            capa={require('@/assets/images/home/cover-valorant.png')}
                        />
                    </View>

                    <View style={[styles.section, styles.dateTimeSection]}>
                        <View>
                            <Text style={styles.label}>Dia e mês</Text>
                            <View style={styles.dateTimeRow}>
                                <CampoNumerico value={dia} onChangeText={setDia} maximo={31} />
                                <Text style={styles.separator}>/</Text>
                                <CampoNumerico value={mes} onChangeText={setMes} maximo={12} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Horário</Text>
                            <View style={styles.dateTimeRow}>
                                <SeletorHorario
                                    hora={hora}
                                    minuto={minuto}
                                    aoAlterarHorario={(novaHora, novoMinuto) => {
                                        setHora(novaHora);
                                        setMinuto(novoMinuto);
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.descriptionHeader}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.hint}>
                                {descricao.length > 0
                                    ? `${descricao.length}/100 caracteres`
                                    : "Max 100 caracteres"}
                            </Text>
                        </View>
                        <TextInput
                            style={styles.description}
                            value={descricao}
                            onChangeText={(texto) => setDescricao(texto.slice(0, 100))}
                            onFocus={rolarParaDescricao}
                            maxLength={100}
                            multiline
                            placeholder="Digite as informações sobre a partida..."
                            placeholderTextColor="#495BCC"
                        />
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <BotaoPrimario rotulo="Agendar" />
                </View>
            </KeyboardAvoidingView>
        </FundoTela>
    );
}

const styles = StyleSheet.create({
    form: {
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
});
