import { gameTime } from './gameLoop.js';
import { drawRandomCard, applyCard } from './cardsSystem.js';
import { updateUI } from './uiUpdater.js';

// Initialisation
document.getElementById('next-day-btn').addEventListener('click', () => {
    if (gameTime.nextDay()) {
        updateUI();
    }
});

document.getElementById('draw-card-btn').addEventListener('click', () => {
    const card = drawRandomCard();
    const effects = applyCard(card);
    if (effects) updateUI(effects);
});