import { ImageSourcePropType } from "react-native";

export type PapelPartida = "anfitriao" | "visitante";

export type Partida = {
    id: string;
    titulo: string;
    descricao: string;
    categoria: string;
    papel: PapelPartida;
    data: string;
    capa: ImageSourcePropType;
};

export const PARTIDAS: Partida[] = [
    {
        id: "1",
        titulo: "Lendários",
        descricao: "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
        categoria: "Ranqueada",
        papel: "anfitriao",
        data: "18/06 às 21:00h",
        capa: require("@/assets/images/home/cover-lol.png"),
    },
    {
        id: "2",
        titulo: "Yeah, boy",
        descricao: "Só diversão, sem cobrança, é só entrar e se divertir com a galera",
        categoria: "Diversão",
        papel: "visitante",
        data: "23/06 às 19:00h",
        capa: require("@/assets/images/home/cover-apex.png"),
    },
    {
        id: "3",
        titulo: "Rumo ao topo",
        descricao: "Treino focado em mira e posicionamento pra subir de patente esse mês",
        categoria: "1x1",
        papel: "anfitriao",
        data: "20/06 às 09:00h",
        capa: require("@/assets/images/home/cover-csgo.png"),
    },
    {
        id: "4",
        titulo: "Bora queimar tudo",
        descricao: "Partida ranqueada tranquila, só precisa ter paciência e call ligada",
        categoria: "Ranqueada",
        papel: "anfitriao",
        data: "20/06 às 14:20h",
        capa: require("@/assets/images/home/cover-rdr.png"),
    },
    {
        id: "5",
        titulo: "Valorosos",
        descricao: "Grupo pra jogar por diversão, sem estresse e com boas risadas",
        categoria: "Diversão",
        papel: "anfitriao",
        data: "18/06 às 21:00h",
        capa: require("@/assets/images/home/cover-valorant.png"),
    },
];
