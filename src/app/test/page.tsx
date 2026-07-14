"use client";

import { useGameStore } from "../../store/gameStore";
import { scenarios } from "../../data/scenarios";

export default function TestPage() {
  const {
    rationalScore,
    humanScore,
    completedScenarios,
    addScore,
    markScenarioCompleted,
    resetGame,
  } = useGameStore();

  const handleChoice = (scenarioId: string, shift: "rational" | "human" | "neutral") => {
    addScore(shift);
    markScenarioCompleted(scenarioId);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Game State Test</h1>

      <div style={{ padding: "1rem", border: "1px solid #ccc", marginBottom: "2rem" }}>
        <h2>Current Score</h2>
        <p>Rational Robot: {rationalScore}</p>
        <p>Human Being: {humanScore}</p>
        <p>Completed Scenarios: {completedScenarios.join(", ") || "None"}</p>
        <button onClick={resetGame} style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
          Reset Game
        </button>
      </div>

      <h2>Scenarios</h2>
      {scenarios.map((scenario) => (
        <div
          key={scenario.id}
          style={{ padding: "1rem", border: "1px solid #ccc", marginBottom: "1rem" }}
        >
          <h3>
            {scenario.title} ({scenario.concept})
          </h3>
          <p>
            <em>{scenario.setup}</em>
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            {scenario.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoice(scenario.id, choice.spectrumShift)}
                disabled={completedScenarios.includes(scenario.id)}
                style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
              >
                <strong>{choice.text}</strong>
                <br />
                <small>{choice.spectrumShift}</small>
              </button>
            ))}
          </div>

          {completedScenarios.includes(scenario.id) && (
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "#f0f0f0",
                color: "#000",
              }}
            >
              <strong>Breakdown:</strong> {scenario.breakdown}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
