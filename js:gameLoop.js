// Gestion des cycles de jeu
class GameTime {
    constructor() {
        this.day = 1;
        this.actionsLeft = 7;
        this.isPaused = false;
    }

    nextDay() {
        if (!this.isPaused) {
            this.day++;
            this.actionsLeft = 7;
            console.log(`Jour ${this.day} commencé !`);
            return true;
        }
        return false;
    }

    useAction() {
        if (this.actionsLeft > 0) {
            this.actionsLeft--;
            return true;
        }
        return false;
    }
}

export const gameTime = new GameTime();