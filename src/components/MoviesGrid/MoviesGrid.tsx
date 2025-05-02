
import { Movie } from '@/types/Movie';
import MovieCard from '../MoviesCard/MoviesCard';
import styles from './MoviesGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  favorites: Movie[];
  onToggleFavorite: (movie: Movie) => void;
}

const MovieGrid = ({ movies, favorites, onToggleFavorite }: MovieGridProps) => {
  return (
    <div className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default MovieGrid;