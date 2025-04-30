import { gameTime } from './gameLoop.js';

const cardsDatabase = [
    {
        id: 1,
        title: "Planter un arbre",
        effects: { ecology: +10, comfort: -5 },
        cost: 0
    },
    {
        id: 2,
        title: "Acheter un climatiseur",
        effects: { comfort: +15, ecology: -8 },
        cost: 30
    }
];

export function drawRandomCard() {
    return cardsDatabase[Math.floor(Math.random() * cardsDatabase.length)];
}

export function applyCard(card) {
    if (gameTime.useAction()) {
        console.log(`Carte jouée : ${card.title}`);
        return card.effects;
    }
    return null;
}