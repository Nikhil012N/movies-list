import { useFetch } from '@/hooks/useFetch';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from "./movie-details.module.css";
import Button from '@/components/Button/Button';
import Rating from '@/components/Rating/Rating';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { Movie, MovieByIdParams} from '@/types/Movie';
import { getMovieById } from '@/api/MovieSearch.api';



const MoviesDetails = () => {
  const { id="" } = useParams<MovieByIdParams>();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useLocalStorage<Movie[]>('favorites', []);
  
  const { 
    data: movie, 
    loading, 
    error, 
    execute 
  } = useFetch(getMovieById);

  useEffect(() => {
    if (id) {
      execute({ i: id, plot: 'full' });
    }
  }, [id, execute]);

  const isFavorite = favorites.some((fav) => fav.imdbID === id);

  const handleToggleFavorite = () => {
    if (!movie) return;
    
    setFavorites((prevFavorites) => {
      return isFavorite
        ? prevFavorites.filter((fav) => fav.imdbID !== id)
        : [...prevFavorites, movie];
    });
  };

  if (loading) return (
    <div className={styles.loading}>
      <LoadingSpinner />
      <p>Loading movie details...</p>
    </div>
  );

  if (error) return (
    <div className={styles.error}>
      <h3>Error loading movie</h3>
      <p>{error.message}</p>
      <Button onClick={() => execute({ i: id || '', plot: 'full' })}>
        Retry
      </Button>
    </div>
  );

  if (!movie) return (
    <div className={styles.noMovie}>
      <h3>No movie data available</h3>
      <Button onClick={() => navigate('/')}>
        Back to Search
      </Button>
    </div>
  );

  return (
    <div className={styles.movieDetails}>
      <Button 
        onClick={() => navigate(-1)} 
        className={styles.backButton}
        aria-label="Go back to previous page"
      >
        &larr; Back to Results
      </Button>
      
      <div className={styles.movieHeader}>
        <div className={styles.posterContainer}>
          {movie.Poster !== 'N/A' ? (
            <img 
              src={movie.Poster} 
              alt={`Poster for ${movie.Title}`} 
              className={styles.poster}
              loading="lazy"
            />
          ) : (
            <div className={styles.posterPlaceholder}>
              No Image Available
            </div>
          )}
        </div>
        
        <div className={styles.movieInfo}>
          <h1>{movie.Title} ({movie.Year})</h1>
          <p className={styles.genre}>{movie.Genre}</p>
          <p className={styles.director}>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className={styles.plot}>{movie.Plot}</p>
          
          <div className={styles.ratings}>
            <h2>Ratings</h2>
            {movie.Ratings?.map((rating, index) => (
              <Rating 
                key={`${rating.Source}-${index}`} 
                source={rating.Source} 
                value={rating.Value} 
              />
            ))}
          </div>
          
          <Button
            onClick={handleToggleFavorite}
            variant={isFavorite ? 'secondary' : 'outline'}
            className={styles.favoriteButton}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;