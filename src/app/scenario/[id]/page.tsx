"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { scenarios } from "../../../features/game/data/scenarios";
import { useGameStore } from "../../../features/game/store/gameStore";
import { ChoiceCard } from "../../../features/game/components/ChoiceCard";
import { Button } from "../../../shared/ui/Button";
import styles from "./page.module.css";
import { use } from "react";

export default function ScenarioPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const scenario = scenarios.find((s) => s.id === id);

  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [showReveal, setShowReveal] = useState(false);

  const { addScore, markScenarioCompleted } = useGameStore();

  if (!scenario) {
    return (
      <div className={styles.container}>
        <h1>Scenario not found</h1>
        <Button onClick={() => router.push("/map")} variant="primary">
          Back to Map
        </Button>
      </div>
    );
  }

  const handleChoiceClick = (choiceId: string) => {
    if (showReveal) return; // Prevent changing choice after reveal

    setSelectedChoiceId(choiceId);
    setShowReveal(true);

    const choice = scenario.choices.find((c) => c.id === choiceId);
    if (choice) {
      addScore(choice.spectrumShift, 10);
      markScenarioCompleted(scenario.id);
    }
  };

  const handleNext = () => {
    router.push("/map");
  };

  const selectedChoice = scenario.choices.find((c) => c.id === selectedChoiceId);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <header className={styles.header}>
        <h1 className={styles.title}>{scenario.title}</h1>
      </header>

      <section className={styles.setup}>
        <p>{scenario.setup}</p>
      </section>

      <section className={styles.choicesContainer}>
        {scenario.choices.map((choice) => (
          <ChoiceCard
            key={choice.id}
            id={choice.id}
            title={choice.text}
            description={choice.subtext}
            variant={
              showReveal
                ? selectedChoiceId === choice.id
                  ? choice.spectrumShift
                  : "neutral"
                : "neutral"
            }
            selected={selectedChoiceId === choice.id}
            onClick={handleChoiceClick}
          />
        ))}
      </section>

      <AnimatePresence>
        {showReveal && selectedChoice && (
          <motion.section
            className={styles.revealSection}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "var(--spacing-xl)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className={styles.outcome}>{selectedChoice.outcomeText}</h2>

              <div className={styles.breakdownTitle}>The Game Theory Breakdown</div>
              <div className={styles.concept}>Concept: {scenario.concept}</div>
              <p className={styles.breakdownText}>{scenario.breakdown}</p>

              <div className={`${styles.scoreShift} ${styles[selectedChoice.spectrumShift]}`}>
                [ +10 Points to{" "}
                {selectedChoice.spectrumShift === "rational" ? "Rational Logic" : "Human Empathy"} ]
              </div>

              <div className={styles.actionSection}>
                <Button onClick={handleNext} variant="primary">
                  Next Scenario
                </Button>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
