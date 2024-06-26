export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_ACCESS_TOKEN}`
    }
}

export const MOVIES_ENDPOINT = "https://api.themoviedb.org/3/movie/";

export const EMBED_VIDEO_ENDPOINT = "https://www.youtube.com/embed/";

export const MOVIE_IMAGE_CDN_URL = "https://image.tmdb.org/t/p/";

export const VIDEO_API = "/videos";

export const CREDITS_API = "/credits";
export const SEARCH_MOVIE_ENDPOINT = "https://api.themoviedb.org/3/search/movie";

export const SUGGESTIONS_ENDPOINT = "/similar";

export const nowPlaying = "now_playing";
export const popular = "popular";
export const topRated = "top_rated";
export const upcoming = "upcoming";