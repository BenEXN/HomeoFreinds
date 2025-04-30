// État du jeu
const gameState = {
    day: 1,
    actionsLeft: 7,
    comfort: 50,
    ecology: 70,
    economyMode: "standard",
    role: null
};

// Initialisation Phaser
const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
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
    this.load.image('tree', 'assets/tree.svg');
    this.load.image('cloud', 'assets/cloud.svg');
}

function create() {
    // Ajoutez vos éléments de jeu ici
    this.add.image(400, 300, 'tree');
}

function update() {
    // Logique de mise à jour
}

// Gestion des cartes
function applyCardEffects(effects) {
    if (gameState.actionsLeft > 0) {
        gameState.comfort = Math.max(0, Math.min(100, gameState.comfort + (effects.comfort || 0));
        gameState.ecology = Math.max(0, Math.min(100, gameState.ecology + (effects.ecology || 0)));
        gameState.actionsLeft--;
        updateUI();
        return true;
    }
    return false;
}

// Mise à jour de l'interface
function updateUI() {
    document.getElementById('comfort-fill').style.width = `${gameState.comfort}%`;
    document.getElementById('ecology-fill').style.width = `${gameState.ecology}%`;
    document.getElementById('day-indicator').textContent = 
        `Jour ${gameState.day} - Actions restantes: ${gameState.actionsLeft}`;
}

// Exposez les fonctions nécessaires
window.applyCardEffects = applyCardEffects;
window.gameState = gameState;
