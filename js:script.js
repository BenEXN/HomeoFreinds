// ==================== 
// ÉTAT DU JEU
// ====================
const gameState = {
    day: 1,
    actionsLeft: 7,
    comfort: 50,
    ecology: 70,
    economyMode: null,
    role: null
};

// ==================== 
// INITIALISATION PHASER
// ====================
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Chargement des assets
    this.load.image('background', 'assets/bg.png');
}

function create() {
    // Création des éléments de jeu
    this.add.image(400, 300, 'background');
}

function update() {
    // Boucle de jeu
}

// ==================== 
// FONCTIONS DU JEU
// ====================
function applyCardEffects(effects) {
    if (gameState.actionsLeft > 0) {
        gameState.comfort = Math.max(0, Math.min(100, gameState.comfort + (effects.comfort || 0));
        gameState.ecology = Math.max(0, Math.min(100, gameState.ecology + (effects.ecology || 0));
        gameState.actionsLeft--;
        updateUI();
        return true;
    }
    return false;
}

function updateUI() {
    // Sélecteurs DOM (à adapter à votre HTML)
    document.getElementById('comfort-fill').style.width = `${gameState.comfort}%`;
    document.getElementById('ecology-fill').style.width = `${gameState.ecology}%`;
    document.getElementById('day-indicator').textContent = 
        `Jour ${gameState.day} | Actions: ${gameState.actionsLeft}`;
}

// Export pour debug
window.gameState = gameState;