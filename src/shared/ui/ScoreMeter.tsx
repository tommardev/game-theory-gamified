import { motion } from "framer-motion";
import styles from "./ScoreMeter.module.css";

interface ScoreMeterProps {
  rationalScore: number;
  humanScore: number;
}

export function ScoreMeter({ rationalScore, humanScore }: ScoreMeterProps) {
  // Smooth tug-of-war formula based on a max possible difference of 130 points
  const scoreDifference = rationalScore - humanScore;
  const rationalPercentage = Math.max(0, Math.min(100, 50 + (scoreDifference / 130) * 50));
  const humanPercentage = 100 - rationalPercentage;

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <span className={styles.labelRational}>Rational Robot</span>
        <span className={styles.labelHuman}>Human Being</span>
      </div>

      <div className={styles.meterTrack}>
        <motion.div
          className={styles.meterRational}
          initial={{ width: "50%" }}
          animate={{ width: `${rationalPercentage}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        />
        <motion.div
          className={styles.meterHuman}
          initial={{ width: "50%" }}
          animate={{ width: `${humanPercentage}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        />

        {/* Center Indicator */}
        <div className={styles.centerMarker} />
      </div>

      <div className={styles.scores}>
        <span className={styles.scoreRational}>{rationalScore} PTS</span>
        <span className={styles.scoreHuman}>{humanScore} PTS</span>
      </div>
    </div>
  );
}
