const API_KEY = '9fef3925ab4f4ed969f475da2082af24';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const trendingMoviesContainer = document.getElementById('trending-movies');
const searchBar = document.getElementById('search-bar');

// Fetch and display trending movies on page load
document.addEventListener('DOMContentLoaded', async () => {
  const trendingMovies = await fetchTrendingMovies();
  displayMovies(trendingMovies, trendingMoviesContainer);
});

// Perform search and display results
searchBar.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query) {
      const searchResults = await searchMovies(query);
      displayMovies(searchResults, trendingMoviesContainer);
    }
  }
});

// Fetch trending movies
async function fetchTrendingMovies() {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}

// Search movies by title
async function searchMovies(query) {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

// Display movies in the container
function displayMovies(movies, container) {
  container.innerHTML = movies.length
    ? movies
        .map(movie => `
          <div class="movie-card">
            <img src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${movie.title}">
            <div class="movie-info">
              <h3>${movie.title}</h3>
              <p><strong>Rating:</strong> ${movie.vote_average || 'N/A'} ⭐</p>
              <p>${movie.overview ? movie.overview.slice(0, 150) + '...' : 'No description available.'}</p>
            </div>
          </div>
        `)
        .join('')
    : '<p>No results found. Try searching for another movie!</p>';
}


