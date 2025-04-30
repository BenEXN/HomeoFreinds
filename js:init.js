document.addEventListener('DOMContentLoaded', () => {
    // Vérification de Phaser
    if (typeof Phaser === 'undefined') {
        console.error("Phaser n'est pas chargé !");
        return;
    }

    // Initialisation des écouteurs
    document.getElementById('start-button').addEventListener('click', () => {
        document.getElementById('welcome-screen').style.display = 'none';
        // Initialisation du jeu
        updateUI();
    });

    console.log("Jeu initialisé avec succès");
});
