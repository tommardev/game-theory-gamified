"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../../shared/ui/Button";
import { ScoreMeter } from "../../shared/ui/ScoreMeter";
import { useGameStore } from "../../features/game/store/gameStore";
import { scenarios } from "../../features/game/data/scenarios";
import { getIconByName } from "../../features/game/components/icons/ScenarioIcons";

export default function MapPage() {
  const router = useRouter();
  const { rationalScore, humanScore, completedScenarios } = useGameStore();

  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Button variant="secondary" onClick={() => router.push("/")}>
            &lt; Back to Title
          </Button>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem",
            background: "linear-gradient(90deg, var(--color-rational), var(--color-human))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CHOOSE YOUR DILEMMA
        </motion.h1>

        <div style={{ marginBottom: "4rem" }}>
          <ScoreMeter rationalScore={rationalScore} humanScore={humanScore} />
        </div>

        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          {scenarios.map((scenario, index) => {
            const isCompleted = completedScenarios.includes(scenario.id);
            // In a real app, unlock logic would depend on previous scenario completion
            // For MVP, scenario 0 is always unlocked. Others are unlocked if the previous is completed.
            const isUnlocked = index === 0 || completedScenarios.includes(scenarios[index - 1].id);
            const IconComponent = getIconByName(scenario.iconName || "KitchenIcon");

            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: "var(--background)",
                  border: `2px solid ${isCompleted ? "var(--color-rational)" : isUnlocked ? scenario.accentColor : "var(--glass-border)"}`,
                  borderRadius: "16px",
                  padding: "1.5rem",
                  cursor: isUnlocked ? "pointer" : "not-allowed",
                  opacity: isUnlocked ? 1 : 0.5,
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={isUnlocked ? { y: -5, scale: 1.02 } : {}}
                onClick={() => {
                  if (isUnlocked) {
                    router.push(`/scenario/${scenario.id}`);
                  }
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <IconComponent
                    color={isUnlocked ? scenario.accentColor : "var(--text-secondary)"}
                    size={40}
                  />
                </div>
                {isCompleted && (
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "0.8rem",
                      color: "var(--color-rational)",
                      fontWeight: "bold",
                    }}
                  >
                    COMPLETED ✓
                  </div>
                )}
                {!isUnlocked && (
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      fontWeight: "bold",
                    }}
                  >
                    LOCKED 🔒
                  </div>
                )}
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Scenario {index + 1}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "0.5rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {scenario.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {scenario.setup}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
