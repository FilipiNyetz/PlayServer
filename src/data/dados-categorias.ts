import { ImageSourcePropType } from "react-native";

export type Categoria = {
    id: string;
    rotulo: string;
    icone: ImageSourcePropType;
};

export const CATEGORIAS: Categoria[] = [
    {
        id: "ranqueada",
        rotulo: "Ranqueada",
        icone: require("@/assets/images/home/icon-ranqueada.png"),
    },
    {
        id: "duelo-1x1",
        rotulo: "Duelo 1x1",
        icone: require("@/assets/images/home/icon-duelo.png"),
    },
    {
        id: "diversao",
        rotulo: "Diversão",
        icone: require("@/assets/images/home/icon-diversao.png"),
    },
    {
        id: "aleatoria",
        rotulo: "Aleatória",
        icone: require("@/assets/images/home/icon-ranqueada.png"),
    },
];
