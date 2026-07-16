"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../../components/Button";

export default function MapPage() {
  const router = useRouter();

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
        <Button
          variant="secondary"
          onClick={() => router.push("/")}
          style={{ marginBottom: "2rem" }}
        >
          &lt; Back to Title
        </Button>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ 
            fontSize: "2.5rem", 
            textAlign: "center", 
            marginBottom: "3rem",
            background: "linear-gradient(90deg, var(--color-rational), var(--color-human))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          CHOOSE YOUR DILEMMA
        </motion.h1>

        <div style={{ textAlign: "center", color: "var(--text-secondary)" }}>
          <p>Map loading... (Scenario selection logic goes here in Pass 4.2)</p>
        </div>
      </div>
    </main>
  );
}
