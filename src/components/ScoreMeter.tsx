import { motion } from 'framer-motion';
import styles from './ScoreMeter.module.css';

interface ScoreMeterProps {
  rationalScore: number;
  humanScore: number;
}

export function ScoreMeter({ rationalScore, humanScore }: ScoreMeterProps) {
  const total = rationalScore + humanScore;
  // Prevent division by zero; default to 50/50 if both are 0
  const rationalPercentage = total === 0 ? 50 : (rationalScore / total) * 100;
  const humanPercentage = total === 0 ? 50 : (humanScore / total) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <span className={styles.labelRational}>Rational Robot</span>
        <span className={styles.labelHuman}>Human Being</span>
      </div>
      
      <div className={styles.meterTrack}>
        <motion.div 
          className={styles.meterRational}
          initial={{ width: '50%' }}
          animate={{ width: `${rationalPercentage}%` }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        />
        <motion.div 
          className={styles.meterHuman}
          initial={{ width: '50%' }}
          animate={{ width: `${humanPercentage}%` }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        />
        
        {/* Center Indicator */}
        <div className={styles.centerMarker} />
      </div>
      
      <div className={styles.scores}>
        <span className={styles.scoreRational}>{Math.round(rationalPercentage)}%</span>
        <span className={styles.scoreHuman}>{Math.round(humanPercentage)}%</span>
      </div>
    </div>
  );
}
