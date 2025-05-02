import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Movie } from '@/types/Movie';
import { useFetch } from '@/hooks/useFetch';
import MovieGrid from '@/components/MoviesGrid/MoviesGrid';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { searchMovies } from '@/api/MovieSearch.api';
import SearchBar from '@/components/SearchComponent/SearchComponent';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useLocalStorage<Movie[]>('favorites', []);
  const { data, loading, error, execute } = useFetch(searchMovies);


  useEffect(() => {
    execute({ s: 'avengers' }); 
  }, []);

  const handleSearch = (term: string) => {
    if (term.trim()) {
      execute({ s: term });
    }
  };

  const handleToggleFavorite = (movie: Movie) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.imdbID === movie.imdbID);
      return isFavorite
        ? prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
        : [...prevFavorites, movie];
    });
  };

  return (
    <div className={styles.home}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSearch={handleSearch}
        loading={loading}
      />
      
      {!loading && error && <div className={styles.error}>{error.message}</div>}
      
      {loading &&       <LoadingSpinner size="large" color="primary" />}
      
      {!loading &&data?.Search && (
        <MovieGrid
          movies={data.Search}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
      
      {data?.Search?.length === 0 && (
        <div className={styles.noResults}>No movies found. Try another search.</div>
      )}
    </div>
  );
};

export default Home;