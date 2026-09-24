import { View, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { FundoTela } from "@/components/ui/fundo-tela";
import { CabecalhoLista } from "@/components/ui/cabecalho-lista";
import { CabecalhoInicio } from "@/components/inicio/cabecalho-inicio";
import { SeletorCategoria } from "@/components/seletor-categoria";
import { ItemPartida } from "@/components/inicio/item-partida";
import { PARTIDAS } from "@/data/dados-partidas";

export function Inicio() {
    const [categoria, setCategoria] = useState("ranqueada");

    return (
        <FundoTela>
            <ScrollView contentContainerStyle={styles.content}>
                <CabecalhoInicio aoAdicionar={() => router.push('/agendar')} />

                <View style={styles.categories}>
                    <SeletorCategoria idSelecionado={categoria} aoSelecionar={setCategoria} />
                </View>

                <CabecalhoLista
                    titulo="Partidas agendadas"
                    total={PARTIDAS.length}
                    style={styles.listHeader}
                />

                <View style={styles.list}>
                    {PARTIDAS.map((partida) => (
                        <ItemPartida
                            key={partida.id}
                            titulo={partida.titulo}
                            categoria={partida.categoria}
                            papel={partida.papel}
                            data={partida.data}
                            capa={partida.capa}
                            onPress={() => router.push(`/partida/${partida.id}`)}
                        />
                    ))}
                </View>
            </ScrollView>
        </FundoTela>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 56,
        paddingBottom: 40,
    },
    categories: {
        marginTop: 40,
        paddingHorizontal: 24,
    },
    listHeader: {
        paddingHorizontal: 24,
        marginTop: 40,
        marginBottom: 20,
    },
    list: {
        paddingHorizontal: 24,
    },
})

export default Inicio;
