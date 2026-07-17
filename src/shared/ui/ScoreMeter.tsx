import { motion } from "framer-motion";
import styles from "./ScoreMeter.module.css";

interface ScoreMeterProps {
  rationalScore: number;
  humanScore: number;
}

export function ScoreMeter({ rationalScore, humanScore }: ScoreMeterProps) {
  // We calculate the net difference. Max possible difference is roughly 130 points.
  const scoreDifference = rationalScore - humanScore;
  const isRationalWinning = scoreDifference >= 0;
  
  // Percentage is based on the absolute difference (0 to 100% of the half-track)
  const percentage = Math.min(100, (Math.abs(scoreDifference) / 130) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <span className={styles.labelRational}>Rational Robot</span>
        <span className={styles.labelHuman}>Human Being</span>
      </div>

      <div className={styles.trackContainer}>
        {/* Left Half (Rational) */}
        <div className={styles.leftHalf}>
          <motion.div
            className={styles.fillRational}
            initial={{ width: "0%" }}
            animate={{ width: isRationalWinning ? `${percentage}%` : "0%" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          />
        </div>

        {/* Center Indicator */}
        <div className={styles.centerMarker} />
        
        {/* Right Half (Human) */}
        <div className={styles.rightHalf}>
          <motion.div
            className={styles.fillHuman}
            initial={{ width: "0%" }}
            animate={{ width: !isRationalWinning && scoreDifference !== 0 ? `${percentage}%` : "0%" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          />
        </div>
      </div>

      <div className={styles.scores}>
        <span className={styles.scoreRational}>{rationalScore} PTS</span>
        <span className={styles.scoreHuman}>{humanScore} PTS</span>
      </div>
    </div>
  );
}
