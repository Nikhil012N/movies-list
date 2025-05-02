import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Navbar from './components/Navbar/Header';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

const Home = lazy(() => import('@/pages/Home/home'));
const MovieDetails = lazy(() => import('@pages/MovieDetails/movie-details'));
const Favorites = lazy(() => import('@pages/Favorites/favourites'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        <main className="main">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ErrorBoundary>
                      <Home />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/movie/:id"
                  element={
                    <ErrorBoundary>
                      <MovieDetails />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/favorites"
                  element={
                    <ErrorBoundary>
                      <Favorites />
                    </ErrorBoundary>
                  }
                />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
};

export default App;