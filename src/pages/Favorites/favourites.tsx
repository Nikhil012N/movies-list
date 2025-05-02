

import { Movie } from '@/types/Movie';
import styles from './favourites.module.css';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import MovieGrid from '@/components/MoviesGrid/MoviesGrid';


const Favorites = () => {
  const [favorites, setFavorites] = useLocalStorage<Movie[]>('favorites', []);

  const handleToggleFavorite = (movie: Movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
    );
  };

  return (
    <div className={styles.favorites}>
      <h1>Your Favorite Movies</h1>
      
      {favorites.length === 0 ? (
        <div className={styles.noFavorites}>
          You haven't added any favorites yet.
        </div>
      ) : (
        <MovieGrid
          movies={favorites}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
};

export default Favorites;