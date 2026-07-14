import { create } from "zustand";

interface GameState {
  rationalScore: number;
  humanScore: number;
  completedScenarios: string[];
  addScore: (shift: "rational" | "human" | "neutral", amount?: number) => void;
  markScenarioCompleted: (scenarioId: string) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  rationalScore: 0,
  humanScore: 0,
  completedScenarios: [],

  addScore: (shift, amount = 10) =>
    set((state) => {
      if (shift === "rational") {
        return { rationalScore: state.rationalScore + amount };
      }
      if (shift === "human") {
        return { humanScore: state.humanScore + amount };
      }
      return state;
    }),

  markScenarioCompleted: (scenarioId) =>
    set((state) => ({
      completedScenarios: [...new Set([...state.completedScenarios, scenarioId])],
    })),

  resetGame: () => set({ rationalScore: 0, humanScore: 0, completedScenarios: [] }),
}));
