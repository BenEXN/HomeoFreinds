// ==================== 
// INITIALISATION SÉCURISÉE
// ====================
document.addEventListener('DOMContentLoaded', () => {
    // Vérifie que Phaser est chargé
    if (typeof Phaser === 'undefined') {
        console.error("Phaser n'est pas chargé !");
        document.body.innerHTML = `
            <div style="color: red; padding: 20px;">
                Erreur : Phaser n'a pas été chargé correctement.<br>
                Vérifiez la console pour plus de détails.
            </div>
        `;
        return;
    }

    // Vérifie les éléments DOM critiques
    const requiredElements = [
        'comfort-fill',
        'ecology-fill',
        'day-indicator'
    ];

    const missingElements = requiredElements.filter(id => !document.getElementById(id));

    if (missingElements.length > 0) {
        console.error("Éléments manquants :", missingElements);
        alert(`Erreur : Éléments HTML manquants (voir console)`);
        return;
    }

    // Lancement du jeu
    console.log("Jeu initialisé avec succès !");
    updateUI(); // Première mise à jour
});

// Fonction globale pour les cartes
window.applyCardEffects = applyCardEffects;