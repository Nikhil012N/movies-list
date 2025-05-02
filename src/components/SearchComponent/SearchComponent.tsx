import { useState, useEffect } from 'react';
import styles from './SearchComponent.module.css';
import Button from '../Button/Button';


interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onSearch,
  loading = false,
}) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder="Search for movies..."
        className={styles.input}
      />
      <Button
        type="submit"
        variant="primary"
        disabled={loading || !localValue.trim()}
      >
        {loading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
};

export default SearchBar;