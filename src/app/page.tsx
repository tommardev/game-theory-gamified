export default function Home() {
  return (
    <main style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "3rem", color: "var(--teal-blue)" }}>
        Everyday Game Theory
      </h1>
      <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
        You&apos;re playing a game right now. You just don&apos;t know it.
      </p>
    </main>
  );
}
