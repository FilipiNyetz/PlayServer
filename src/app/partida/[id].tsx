import { useLocalSearchParams } from "expo-router";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { FundoTela } from "@/components/ui/fundo-tela";
import { IconeCompartilhar } from "@/components/ui/icones";
import { CabecalhoTela } from "@/components/ui/cabecalho-tela";
import { CabecalhoLista } from "@/components/ui/cabecalho-lista";
import { BotaoDiscord } from "@/components/ui/botao-discord";
import { LinhaJogador } from "@/components/partida/linha-jogador";
import { JOGADORES } from "@/data/dados-jogadores";
import { PARTIDAS } from "@/data/dados-partidas";

export default function DetalhesPartida() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const partida = PARTIDAS.find((item) => item.id === id) ?? PARTIDAS[0];

    return (
        <FundoTela>
            <CabecalhoTela titulo="Detalhes" direita={<IconeCompartilhar />} />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.banner}>
                    <Image
                        source={require('@/assets/images/match/banner.png')}
                        style={styles.bannerImage}
                    />
                    <Text style={styles.title}>{partida.titulo}</Text>
                    <Text style={styles.description}>{partida.descricao}</Text>
                </View>

                <View style={styles.playersSection}>
                    <CabecalhoLista
                        titulo="Jogadores"
                        total={JOGADORES.length}
                        style={styles.playersHeader}
                    />

                    {JOGADORES.map((jogador) => (
                        <LinhaJogador
                            key={jogador.id}
                            nome={jogador.nome}
                            status={jogador.status}
                            avatar={jogador.avatar}
                        />
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <BotaoDiscord rotulo="Entrar na partida" />
            </View>
        </FundoTela>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: 24,
    },
    banner: {
        position: 'relative',
        width: '100%',
        height: 234,
    },
    bannerImage: {
        width: '100%',
        height: 234,
    },
    title: {
        position: 'absolute',
        left: 24,
        top: 120,
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 28,
        color: '#DDE3F0',
    },
    description: {
        position: 'absolute',
        left: 24,
        top: 168,
        width: 311,
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        lineHeight: 21,
        color: '#DDE3F0',
    },
    playersSection: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    playersHeader: {
        marginBottom: 24,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
});
