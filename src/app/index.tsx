import { Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { DiscordButton } from "@/components/discord-button";

export function Login() {
    return (
        <LinearGradient
            colors={["#0E1647", "#0A1033"]}
            style={styles.loginView}
        >
            <Image
                source={require('@/assets/images/Union.png')}
                style={styles.union}
            />
            <Image
                source={require('@/assets/images/lol.png')}
                style={styles.character}
            />
            <LinearGradient
                colors={["rgba(12, 18, 59, 0)", "#0C123B"]}
                style={styles.heroFade}
            />

            <Text style={styles.titletext}>
                Conecte-se{"\n"}e organize suas{"\n"}jogatinas
            </Text>
            <Text style={styles.subtitletext}>
                Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
            </Text>

            <DiscordButton
                label="Entrar com Discord"
                onPress={() => router.push('/home')}
                style={styles.button}
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
    },
    union: {
        position: 'absolute',
        top: 100,
        left: 0,
        width: 375,
        height: 360,
    },
    character: {
        position: 'absolute',
        top: 114.51,
        left: 72,
        width: 250,
        height: 297,
    },
    heroFade: {
        position: 'absolute',
        top: 380.51,
        left: 0,
        width: 375,
        height: 127,
    },
    titletext: {
        position: 'absolute',
        top: 394.51,
        left: 0,
        width: 375,
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 40,
        lineHeight: 40,
        color: '#DDE3F0',
        textAlign: 'center',
    },
    subtitletext: {
        position: 'absolute',
        top: 530.51,
        left: 0,
        width: 375,
        fontFamily: 'Inter_400Regular',
        fontSize: 15,
        lineHeight: 25,
        color: '#DDE3F0',
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        top: 628.51,
        left: 51,
        right: 50,
    },
})

export default Login;
