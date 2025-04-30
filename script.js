// À ajouter en début de fichier
import { gameTime } from './js/gameLoop.js';
import { applyCard } from './js/cardsSystem.js';

// Remplacer la fonction applyCardEffects existante
window.applyCardEffects = (effects) => {
  if (gameTime.useAction()) {
    // Mise à jour des stats
    gameState.comfort = Math.max(0, Math.min(100, gameState.comfort + (effects.comfort || 0));
    gameState.ecology = Math.max(0, Math.min(100, gameState.ecology + (effects.ecology || 0));
    
    // Mise à jour UI
    updateUI();
    return true;
  }
  return false;
};