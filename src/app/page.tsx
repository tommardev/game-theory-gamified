"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        padding: "2rem",
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
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(130, 146, 196, 0.15) 0%, rgba(0,0,0,0) 70%)",
          zIndex: -1,
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "1.5rem",
          color: "var(--color-rational)",
          marginBottom: "3rem",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Everyday Game Theory
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ maxWidth: "800px", marginBottom: "4rem" }}
      >
        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            fontWeight: 800,
          }}
        >
          YOU&apos;RE PLAYING A GAME RIGHT NOW.
          <br />
          <span style={{ 
            background: "linear-gradient(90deg, var(--color-human), var(--color-rational))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block"
          }}>
            YOU JUST DON&apos;T KNOW IT.
          </span>
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button
          variant="human"
          onClick={() => router.push("/map")}
          style={{ padding: "1rem 3rem", fontSize: "1.2rem", borderRadius: "50px" }}
        >
          START GAME
        </Button>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "15%", left: "15%", fontSize: "3rem", opacity: 0.5 }}
      >
        🍰
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: "25%", right: "15%", fontSize: "4rem", opacity: 0.5 }}
      >
        ☕
      </motion.div>
    </main>
  );
}
