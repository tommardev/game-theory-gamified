import { motion } from "framer-motion";
import styles from "./ChoiceCard.module.css";

interface ChoiceCardProps {
  id: string;
  title: string;
  description: string;
  variant?: "neutral" | "rational" | "human";
  selected?: boolean;
  onClick: (id: string) => void;
}

export function ChoiceCard({
  id,
  title,
  description,
  variant = "neutral",
  selected = false,
  onClick,
}: ChoiceCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${styles[variant]} ${selected ? styles.selected : ""}`}
      onClick={() => onClick(id)}
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.glow} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
