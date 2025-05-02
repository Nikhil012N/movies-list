export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;
}

export interface MovieDetails extends Movie {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: 'True' | 'False';
  Error?: string;
}

export interface MovieSearchResult {
  Search: Movie[];
  totalResults: string;
  Response: 'True' | 'False';
  Error?: string;
}
export interface MovieSearchParams {
  s: string;
  page?: number;
  type?: "movie" | "series" | "episode";
  year?: string;
  Search?: [];
}
export interface MovieByIdParams {
  i: string;
  plot?: "short" | "full";
  [key: string]: string | undefined; 
}
