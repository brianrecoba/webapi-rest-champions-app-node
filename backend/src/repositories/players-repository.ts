import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        },
    },
    {
        id: 2,
        name: "Trent Alexander-Arnold",
        club: "Liverpool",
        nationality: "England",
        position: "Defender",
        statistics: {
            Overall: 87,
            Pace: 84,
            Shooting: 70,
            Passing: 86,
            Dribbling: 82,
            Defending: 85,
            Physical: 77
        },
    },
    {
        id: 3,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 87,
            Pace: 84,
            Shooting: 70,
            Passing: 86,
            Dribbling: 82,
            Defending: 85,
            Physical: 77
        },
    },
    {
        id: 4,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 89,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 78
        },
    }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex((p) => p.id === id);

    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }

    return false;
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    const playerIndex = database.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;

    }
    return database[playerIndex];
}