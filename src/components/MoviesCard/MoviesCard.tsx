import { Movie } from '@/types/Movie';
import styles from './MoviesCard.module.css';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaInfoCircle, FaFilm } from 'react-icons/fa';
import { MouseEvent, KeyboardEvent } from 'react';
import Button from '../Button/Button';

interface MovieCardProps {
  movie: Movie;
  onToggleFavorite: (movie: Movie) => void;
  isFavorite: boolean;
  className?: string;
}

const MovieCard = ({ movie, onToggleFavorite, isFavorite, className = '' }: MovieCardProps) => {
  const navigate = useNavigate();

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onToggleFavorite(movie);
  };

  const handleCardClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article 
      className={`${styles.movieCard} ${className}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Movie card for ${movie.Title}`}
      data-testid="movie-card"
    >
      <div className={styles.posterContainer}>
        {movie.Poster !== 'N/A' ? (
          <img
            src={movie.Poster}
            alt={`Poster for ${movie.Title}`}
            className={styles.poster}
            loading="lazy"
            width={300}
            height={450}
          />
        ) : (
          <div className={styles.posterPlaceholder}>
            <FaFilm className={styles.placeholderIcon} size={48} aria-hidden="true" />
            <span>No Image Available</span>
          </div>
        )}
      </div>

      <div className={styles.details}>
        <h3 className={styles.title} title={movie.Title}>{movie.Title}</h3>
        <p className={styles.year}>{movie.Year}</p>
        <div className={styles.actions}>
          <Button
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className={styles.infoButton}
            aria-label={`View details for ${movie.Title}`}
          >
            <FaInfoCircle className={styles.buttonIcon} size={16} aria-hidden="true" />
            <span className={styles.buttonText}>More Info</span>
          </Button>
          <Button
            variant="secondary"
            onClick={handleFavoriteClick}
            className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
            aria-label={isFavorite ? `Remove ${movie.Title} from favorites` : `Add ${movie.Title} to favorites`}
            aria-pressed={isFavorite}
            type="button"
            data-testid="favorite-button"
          >
            <FaHeart 
              size={16}
              aria-hidden="true"
              className={styles.heartIcon}
            />
            <span className={styles.buttonText}>
              {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;