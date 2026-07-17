"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/Button";
import { ChoiceCard } from "@/features/game/components/ChoiceCard";
import { ScoreMeter } from "@/shared/ui/ScoreMeter";

export default function TestUIPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [rationalScore, setRationalScore] = useState(50);
  const [humanScore, setHumanScore] = useState(50);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <h1>UI Components Test</h1>

      <section>
        <h2>1. Buttons</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="rational">Rational Button</Button>
          <Button variant="human">Human Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </section>

      <section>
        <h2>2. Choice Cards</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <ChoiceCard
            id="c1"
            title="Hold out"
            description="Refuse to wash them, hoping your roommate breaks first. (Rational)"
            variant="rational"
            selected={selectedCard === "c1"}
            onClick={setSelectedCard}
          />
          <ChoiceCard
            id="c2"
            title="Give in"
            description="Just wash the dishes because you can't stand the smell. (Human)"
            variant="human"
            selected={selectedCard === "c2"}
            onClick={setSelectedCard}
          />
        </div>
      </section>

      <section>
        <h2>3. Score Meter</h2>
        <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ScoreMeter rationalScore={rationalScore} humanScore={humanScore} />

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button variant="rational" onClick={() => setRationalScore((s) => s + 10)}>
              +10 Rational
            </Button>
            <Button variant="human" onClick={() => setHumanScore((s) => s + 10)}>
              +10 Human
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setRationalScore(50);
                setHumanScore(50);
              }}
            >
              Reset
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
