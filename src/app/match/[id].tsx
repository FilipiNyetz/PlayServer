import { useLocalSearchParams } from "expo-router";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ShareIcon } from "@/components/icons";
import { ScreenHeader } from "@/components/screen-header";
import { DiscordButton } from "@/components/discord-button";
import { PlayerRow } from "@/components/match/player-row";
import { PLAYERS } from "@/data/players-data";
import { MATCHES } from "@/data/matches-data";

export default function MatchDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const match = MATCHES.find((item) => item.id === id) ?? MATCHES[0];

    return (
        <LinearGradient colors={["#0E1647", "#0A1033"]} style={styles.container}>
            <ScreenHeader title="Detalhes" right={<ShareIcon />} />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.banner}>
                    <Image
                        source={require('@/assets/images/match/banner.png')}
                        style={styles.bannerImage}
                    />
                    <Text style={styles.title}>{match.title}</Text>
                    <Text style={styles.description}>{match.description}</Text>
                </View>

                <View style={styles.playersSection}>
                    <View style={styles.playersHeader}>
                        <Text style={styles.playersTitle}>Jogadores</Text>
                        <Text style={styles.playersTotal}>Total {PLAYERS.length}</Text>
                    </View>

                    {PLAYERS.map((player) => (
                        <PlayerRow
                            key={player.id}
                            name={player.name}
                            status={player.status}
                            avatar={player.avatar}
                        />
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <DiscordButton label="Entrar na partida" />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    playersTitle: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: '#DDE3F0',
    },
    playersTotal: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: '#ABB1CC',
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
});
