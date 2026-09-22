import { Player } from "../components/match/player-row";

export const PLAYERS: Player[] = [
    {
        id: "1",
        name: "Tiago Luchtenberg",
        status: "available",
        avatar: require("@/assets/images/match/player-1.jpg"),
    },
    {
        id: "2",
        name: "Rodrigo Gonçalves",
        status: "busy",
        avatar: require("@/assets/images/match/player-2.jpg"),
    },
    {
        id: "3",
        name: "Diego Fernandes",
        status: "busy",
        avatar: require("@/assets/images/match/player-3.png"),
    },
];
