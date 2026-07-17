"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../shared/ui/Button";

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        padding: "var(--spacing-xl) var(--spacing-lg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient mesh glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "10%",
          left: "30%",
          width: "80vw",
          height: "80vw",
          background: "radial-gradient(circle, var(--color-theme-7) 0%, transparent 60%)",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "70vw",
          height: "70vw",
          background: "radial-gradient(circle, var(--color-theme-1) 0%, transparent 60%)",
          filter: "blur(100px)",
          zIndex: -1,
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontSize: "1.2rem",
          color: "var(--color-theme-3)",
          marginBottom: "var(--spacing-lg)",
          fontWeight: 800,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        Everyday Game Theory
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
        style={{ maxWidth: "800px", marginBottom: "var(--spacing-xl)" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            marginBottom: "var(--spacing-lg)",
            fontWeight: 800,
            textShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          YOU&apos;RE PLAYING A GAME RIGHT NOW.
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, var(--color-theme-1), var(--color-theme-3))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            YOU JUST DON&apos;T KNOW IT.
          </span>
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          (Game theory isn&apos;t math. It&apos;s just figuring out what to do based on what others
          will do.)
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.5 }}
      >
        <Button
          variant="primary"
          onClick={() => router.push("/map")}
          style={{
            padding: "1.2rem 4rem",
            fontSize: "1.4rem",
            borderRadius: "50px",
            background: "linear-gradient(45deg, var(--color-theme-1), var(--color-theme-4))",
            border: "none",
            color: "#fff",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            boxShadow: "0 8px 25px rgba(224, 122, 95, 0.4)",
          }}
        >
          START GAME
        </Button>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "20%", left: "10%", fontSize: "4rem", opacity: 0.4 }}
      >
        🍰
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: "20%", right: "10%", fontSize: "5rem", opacity: 0.3 }}
      >
        ☕
      </motion.div>
    </main>
  );
}
