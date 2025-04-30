// État du jeu
const gameState = {
  day: 1,
  actionsLeft: 7,
  economyMode: "standard", // "debt", "homeostatic", "hybrid"
  role: "educator",       // "producer", "caretaker"
  comfort: 40,            // 0-100
  ecology: 80,            // 0-100
  savings: 100,
  income: 20,
  envColors: ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0"] // Couleurs environnement
};

// Éléments DOM
const elements = {
  dayIndicator: document.getElementById("day-indicator"),
  comfortFill: document.getElementById("comfort-fill"),
  ecologyFill: document.getElementById("ecology-fill"),
  savingsValue: document.getElementById("savings-value"),
  incomeValue: document.getElementById("income-value"),
  roleValue: document.getElementById("role-value"),
  economyMode: document.getElementById("economy-mode"),
  cardsContainer: document.getElementById("cards-container"),
  envStatus: document.getElementById("environment-status"),
  tamagotchiFace: document.getElementById("tamagotchi-face")
};

// Mise à jour de l'UI
function updateUI() {
  elements.dayIndicator.textContent = `Jour ${gameState.day} - Actions restantes: ${gameState.actionsLeft}`;
  elements.comfortFill.style.width = `${gameState.comfort}%`;
  elements.ecologyFill.style.width = `${gameState.ecology}%`;
  elements.savingsValue.textContent = gameState.savings;
  elements.incomeValue.textContent = `+${gameState.income}/jour`;
  elements.roleValue.textContent = gameState.role === "educator" ? "Éducateur" : "Producteur";
  elements.economyMode.textContent = gameState.economyMode === "debt" ? "Monnaie Dette" : "Homéostatique";

  // Mise à jour des couleurs environnement
  elements.envStatus.innerHTML = gameState.envColors.map(color => `
    <div class="env-color" style="background-color: ${color};"></div>
  `).join("");

  // Expression du Tamagotchi
  const face = gameState.comfort >= 50 ? "😊" : "😞";
  elements.tamagotchiFace.textContent = face;
}

// Exemple de carte d'action
function generateCards() {
  const cards = [
    {
      title: "Planter un arbre",
      description: "Améliore l'environnement mais réduit le confort.",
      effects: { ecology: +10, comfort: -5 }
    },
    {
      title: "Acheter un objet",
      description: "Augmente le confort mais coûte de l'épargne.",
      effects: { comfort: +15, savings: -20 }
    }
  ];

  elements.cardsContainer.innerHTML = cards.map(card => `
    <div class="card">
      <div class="card-title">${card.title}</div>
      <div class="card-description">${card.description}</div>
      <div class="card-options">
        <button class="card-option" onclick="applyCardEffects(${JSON.stringify(card.effects)})">
          Choisir
        </button>
      </div>
    </div>
  `).join("");
}

// Appliquer les effets d'une carte
function applyCardEffects(effects) {
  if (gameState.actionsLeft <= 0) return;

  Object.keys(effects).forEach(key => {
    gameState[key] += effects[key];
  });
  gameState.actionsLeft--;
  updateUI();
}

// Initialisation
document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("mode-selection").style.display = "block";
});

// Confirmation du mode économique
document.getElementById("mode-confirm-button").addEventListener("click", () => {
  gameState.economyMode = "debt"; // À adapter avec la sélection réelle
  document.getElementById("mode-selection").style.display = "none";
  document.getElementById("role-selection").style.display = "block";
});

// Confirmation du rôle
document.getElementById("role-confirm-button").addEventListener("click", () => {
  document.getElementById("role-selection").style.display = "none";
  generateCards();
  updateUI();
});

// Démarrer avec des valeurs par défaut
updateUI();