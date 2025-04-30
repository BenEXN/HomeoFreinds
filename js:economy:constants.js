// Paramètres ajustables
export const ECONOMY_MODES = {
    DEBT: {
        incomeBase: 20,
        decayRate: 0.1
    },
    HOMEOSTATIC: {
        incomeBase: 15,
        decayRate: 0.05
    }
};

export const ROLES = {
    EDUCATOR: { incomeMultiplier: 1.2, ecoImpact: 0.8 },
    PRODUCER: { incomeMultiplier: 1.5, ecoImpact: 1.2 }
};