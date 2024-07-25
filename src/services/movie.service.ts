import fetch from 'node-fetch'
import { Movie, MovieDetail, PaginatedResponse } from '../models/movie.model';
import { TMDBAPIDetailResponse, TMDBAPIResponse, TMDBGenreResponse, TMDBMovieResponse } from '../responses/api.response';
import { GenreService } from './genre.service';
import { setPathImage } from '../helpers/utils';

export class MovieService {
    static async getPopularMovie(page: number): Promise<PaginatedResponse<Movie>> {
        try {

            const url = `${process.env.TMDB_API_URL}/movie/popular?page=${page}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                }
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: TMDBAPIResponse = await response.json();

            const genres: TMDBGenreResponse[] = await GenreService.get();
            const genreMap = new Map<number, string>(genres.map(genre => [genre.id, genre.name]));

            const movies: Movie[] = data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                genres: movie.genre_ids.map(id => genreMap.get(id) || 'Unknown'),
                poster_path: setPathImage(movie.poster_path),
                backdrop_path: setPathImage(movie.backdrop_path),
                overview: movie.overview,
                popularity: movie.popularity,
                release_date: movie.release_date
            }));

            const paginatedResponse: PaginatedResponse<Movie> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: movies,
                next: data.page < data.total_pages ? `${process.env.URL}/movie/popular?page=${data.page + 1}` : undefined,
                previous: data.page > 1 ? `${process.env.URL}/movie/popular?page=${data.page - 1}` : undefined,
                first: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=1` : undefined,
                last: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=${data.total_pages}` : undefined
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw new Error('Failed to fetch popular movies');
        }
    }

    static async getTopRatedMovie(page: number): Promise<PaginatedResponse<Movie>> {
        try {

            const url = `${process.env.TMDB_API_URL}/movie/top_rated?page=${page}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                }
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: TMDBAPIResponse = await response.json();

            const genres: TMDBGenreResponse[] = await GenreService.get();
            const genreMap = new Map<number, string>(genres.map(genre => [genre.id, genre.name]));

            const movies: Movie[] = data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                genres: movie.genre_ids.map(id => genreMap.get(id) || 'Unknown'),
                poster_path: setPathImage(movie.poster_path),
                backdrop_path: setPathImage(movie.backdrop_path),
                overview: movie.overview,
                popularity: movie.popularity,
                release_date: movie.release_date,
            }));

            const paginatedResponse: PaginatedResponse<Movie> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: movies,
                next: data.page < data.total_pages ? `${process.env.URL}/movie/popular?page=${data.page + 1}` : undefined,
                previous: data.page > 1 ? `${process.env.URL}/movie/popular?page=${data.page - 1}` : undefined,
                first: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=1` : undefined,
                last: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=${data.total_pages}` : undefined
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
            throw new Error('Failed to fetch top rated movies');
        }
    }

    static async getUpcomingMovie(page: number): Promise<PaginatedResponse<Movie>> {
        try {

            const url = `${process.env.TMDB_API_URL}/movie/upcoming?page=${page}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                }
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: TMDBAPIResponse = await response.json();

            const genres: TMDBGenreResponse[] = await GenreService.get();
            const genreMap = new Map<number, string>(genres.map(genre => [genre.id, genre.name]));

            const movies: Movie[] = data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                genres: movie.genre_ids.map(id => genreMap.get(id) || 'Unknown'),
                poster_path: setPathImage(movie.poster_path),
                backdrop_path: setPathImage(movie.backdrop_path),
                overview: movie.overview,
                popularity: movie.popularity,
                release_date: movie.release_date,
            }));

            const paginatedResponse: PaginatedResponse<Movie> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: movies,
                next: data.page < data.total_pages ? `${process.env.URL}/movie/popular?page=${data.page + 1}` : undefined,
                previous: data.page > 1 ? `${process.env.URL}/movie/popular?page=${data.page - 1}` : undefined,
                first: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=1` : undefined,
                last: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=${data.total_pages}` : undefined
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
            throw new Error('Failed to fetch top rated movies');
        }
    }

    static async getNowPlaying(page: number): Promise<PaginatedResponse<Movie>> {
        try {

            const url = `${process.env.TMDB_API_URL}/movie/now_playing?page=${page}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                }
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: TMDBAPIResponse = await response.json();

            const genres: TMDBGenreResponse[] = await GenreService.get();
            const genreMap = new Map<number, string>(genres.map(genre => [genre.id, genre.name]));

            const movies: Movie[] = data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                genres: movie.genre_ids.map(id => genreMap.get(id) || 'Unknown'),
                poster_path: setPathImage(movie.poster_path),
                backdrop_path: setPathImage(movie.backdrop_path),
                overview: movie.overview,
                popularity: movie.popularity,
                release_date: movie.release_date,
            }));

            const paginatedResponse: PaginatedResponse<Movie> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: movies,
                next: data.page < data.total_pages ? `${process.env.URL}/movie/popular?page=${data.page + 1}` : undefined,
                previous: data.page > 1 ? `${process.env.URL}/movie/popular?page=${data.page - 1}` : undefined,
                first: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=1` : undefined,
                last: data.total_pages > 0 ? `${process.env.URL}/movie/popular?page=${data.total_pages}` : undefined
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
            throw new Error('Failed to fetch top rated movies');
        }
    }

    static async getDetailByIdMovie(id: string): Promise<Movie> {
        try {

            const url = `${process.env.TMDB_API_URL}/movie/${id}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                }
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: TMDBAPIDetailResponse = await response.json();

            const movie: MovieDetail = {
                id: data.id,
                title: data.title,
                genres: data.genres.map(genre => genre.name),
                poster_path: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
                backdrop_path: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
                overview: data.overview,
                popularity: data.popularity,
                release_date: data.release_date,
                status: data.status,
                tagline: data.tagline,
                vote: data.vote_average,
                vote_count: data.vote_count
            };
           
            return movie;
            
        } catch (error) {
            console.error('Error fetching movie details:', error);
            throw new Error('Failed to fetch movie details');
        }
    }

    
}