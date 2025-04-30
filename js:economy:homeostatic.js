export class HomeostaticEngine {
  constructor() {
    this.moneySupply = 1000;
  }

  redistribute(players) {
    const totalProductivity = players.reduce((sum, p) => sum + p.productivity, 0);
    players.forEach(player => {
      player.income = (player.productivity / totalProductivity) * this.moneySupply;
    });
  }
}