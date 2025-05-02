import React from 'react';
import styles from './LoadingSpinner.module.css';

export type SpinnerSize = 'small' | 'medium' | 'large' | 'xlarge';
export type SpinnerColor = 'primary' | 'secondary' | 'light' | 'dark' | 'white';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
  ariaLabel?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
  ariaLabel = 'Loading...',
}) => {
  return (
    <div 
      className={`${styles.spinner} ${styles[size]} ${styles[color]} ${className}`}
      role="status"
      aria-label={ariaLabel}
    >
      <div className={styles.spinnerInner} aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={styles.spinnerBar} />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;