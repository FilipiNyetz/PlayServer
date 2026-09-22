import { Match } from "../components/home/match-list-item";

export const MATCHES: Match[] = [
    {
        id: "1",
        title: "Lendários",
        description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
        category: "Ranqueada",
        role: "host",
        date: "18/06 às 21:00h",
        cover: require("@/assets/images/home/cover-lol.png"),
    },
    {
        id: "2",
        title: "Yeah, boy",
        description: "Só diversão, sem cobrança, é só entrar e se divertir com a galera",
        category: "Diversão",
        role: "guest",
        date: "23/06 às 19:00h",
        cover: require("@/assets/images/home/cover-apex.png"),
    },
    {
        id: "3",
        title: "Rumo ao topo",
        description: "Treino focado em mira e posicionamento pra subir de patente esse mês",
        category: "1x1",
        role: "host",
        date: "20/06 às 09:00h",
        cover: require("@/assets/images/home/cover-csgo.png"),
    },
    {
        id: "4",
        title: "Bora queimar tudo",
        description: "Partida ranqueada tranquila, só precisa ter paciência e call ligada",
        category: "Ranqueada",
        role: "host",
        date: "20/06 às 14:20h",
        cover: require("@/assets/images/home/cover-rdr.png"),
    },
    {
        id: "5",
        title: "Valorosos",
        description: "Grupo pra jogar por diversão, sem estresse e com boas risadas",
        category: "Diversão",
        role: "host",
        date: "18/06 às 21:00h",
        cover: require("@/assets/images/home/cover-valorant.png"),
    },
];
