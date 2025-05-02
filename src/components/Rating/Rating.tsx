import styles from './Rating.module.css';

interface RatingProps {
  source: string;
  value: string;
}

const Rating: React.FC<RatingProps> = ({ source, value }) => {

  const getRatingValue = () => {
    if (value.includes('%')) {
      return parseInt(value) / 20; 
    }
    if (value.includes('/10')) {
      return parseFloat(value) / 2; 
    }
    if (value.includes('/100')) {
      return parseFloat(value) / 20; 
    }
    return parseFloat(value); 
  };

  const ratingValue = getRatingValue();
  const stars = Math.min(5, Math.max(0, Math.round(ratingValue)));

  return (
    <div className={styles.rating}>
      <div className={styles.source}>{source}</div>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`${styles.star} ${i < stars ? styles.filled : ''}`}
          >
            ★
          </span>
        ))}
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default Rating;