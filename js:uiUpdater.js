export function updateUI(statChanges) {
    // Exemple de sélecteurs - à adapter à votre HTML
    const elements = {
        dayDisplay: document.getElementById('day-display'),
        comfortBar: document.getElementById('comfort-bar'),
        ecologyBar: document.getElementById('ecology-bar')
    };

    if (statChanges) {
        elements.comfortBar.style.width = `${statChanges.comfort}%`;
        elements.ecologyBar.style.width = `${statChanges.ecology}%`;
    }
    elements.dayDisplay.textContent = `Jour ${gameTime.day} | Actions: ${gameTime.actionsLeft}`;
}