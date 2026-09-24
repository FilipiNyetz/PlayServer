import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { IconeMais } from "@/components/ui/icones";

type CabecalhoInicioProps = {
    aoAdicionar: () => void;
};

export function CabecalhoInicio({ aoAdicionar }: CabecalhoInicioProps) {
    return (
        <View style={styles.header}>
            <View style={styles.headerInfo}>
                <Image
                    source={require('@/assets/images/home/avatar.png')}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.greeting}>
                        <Text style={styles.greetingLight}>Olá, </Text>
                        Tiago
                    </Text>
                    <Text style={styles.subtitle}>Hoje é dia de vitória</Text>
                </View>
            </View>
            <Pressable style={styles.addButton} onPress={aoAdicionar}>
                <IconeMais />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#243189',
    },
    greeting: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 24,
        color: '#DDE3F0',
    },
    greetingLight: {
        fontFamily: 'Rajdhani_500Medium',
    },
    subtitle: {
        marginTop: 4,
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: '#ABB1CC',
    },
    addButton: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#E51C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
