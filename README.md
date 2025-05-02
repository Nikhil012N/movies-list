# 🎬 Movie Browser App

## 📘 Objective

- 🔍 **Search for movies** using the OMDb API  
- ℹ️ **View details** about a selected movie  
- ⭐ **Save favorite movies** locally (in your browser)  

---

## ✅ Requirements

1. **Search Functionality**
    - Use the [OMDb API](https://www.omdbapi.com/) (free registration) to search movies by title.
    - Display results in a grid with:
        - 🖼️ Poster
        - 🎞️ Title
        - 📅 Year
        - ℹ️ "More Info" button

2. **Movie Details Page**
    - Clicking “More Info” navigates to a detail page (React Router).
    - Show:
        - 🎞️ Title
        - 🖼️ Poster
        - 🏷️ Genre
        - 🎬 Director
        - 📝 Plot
        - ⭐ Ratings

3. **Favorites Feature**
    - ⭐ Save movies to favorites with a button
    - 💾 Use `localStorage` to persist favorites
    - 📂 Favorites Page to view/remove saved favorites

---

## ⚙️ Technical Expectations

- ⚛️ React 18+ with functional components and Hooks
- 🔗 Use React Router for navigation
- 🚫 No class components
- 🎨 Use CSS Modules or Styled Components (no Bootstrap/Tailwind)
- 📁 Clean project structure (`components/`, `pages/`, `services/`, etc.)
- 💡 **Bonus:** Use TypeScript

---

## 🛠️ Setup & Usage

1. **Clone the repository:**
    ```
    git clone https://github.com/Nikhil012N/movies-list.git
    ```
2. **Install dependencies:**
    ```
    npm install
    ```
3. **Start the app:**
    ```
    npm run dev
    ```

---

## 🚀 Features Overview

- 🔍 **Search** for movies by title  
- 🖼️ **Grid display** of search results  
- ℹ️ **View detailed info** on a separate page  
- ⭐ **Favorite/unfavorite** any movie  
- 📂 **Favorites page** to manage saved movies  
- 💾 **Favorites persist** using `localStorage`  

---

## 💡 Icons

- Use [react-icons](https://react-icons.github.io/react-icons/) for consistent, scalable icons in your React app.
- Example usage:
    ```
    import { FaHeart, FaRegHeart, FaInfoCircle } from 'react-icons/fa';

         // Filled heart for favorite
      // Outline heart for not favorite
     // Info icon
    ```
    You can style icons via the `style` prop or with CSS Modules.

---

## 📁 Project Structure

- **components/** – Reusable UI components (e.g., MovieCard, FavoriteButton)
- **pages/** – Page components (Home, MovieDetails, Favorites)
- **services/** – API logic (e.g., omdbApi.js)
- **styles/** – CSS Modules or styled-components files

---

## 📝 License

This project is open source and free to use.

---

_Built with ⚛️ React, 🔗 React Router, 💠 React Icons, and 💾 Local Storage._

