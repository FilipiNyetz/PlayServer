import { ImageSourcePropType } from "react-native";

export type StatusJogador = "disponivel" | "ocupado";

export type Jogador = {
    id: string;
    nome: string;
    status: StatusJogador;
    avatar: ImageSourcePropType;
};

export const JOGADORES: Jogador[] = [
    {
        id: "1",
        nome: "Tiago Luchtenberg",
        status: "disponivel",
        avatar: require("@/assets/images/match/player-1.jpg"),
    },
    {
        id: "2",
        nome: "Rodrigo Gonçalves",
        status: "ocupado",
        avatar: require("@/assets/images/match/player-2.jpg"),
    },
    {
        id: "3",
        nome: "Diego Fernandes",
        status: "ocupado",
        avatar: require("@/assets/images/match/player-3.png"),
    },
];
