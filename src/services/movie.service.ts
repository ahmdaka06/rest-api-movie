import fetch from 'node-fetch'
import { Movie, PaginatedResponse } from '../models/movie.model';
import { TMDBAPIResponse } from '../responses/api.response';

export class MovieService {
    static async popular(page: number): Promise<PaginatedResponse<Movie>> {
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

            // Pastikan format data sesuai dengan tipe PaginatedResponse
            const paginatedResponse: PaginatedResponse<Movie> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: data.results.map((movie: any) => ({
                    id: movie.id,
                    title: movie.title,
                    poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                    backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                    overview: movie.overview,
                    popularity: movie.popularity,
                    release_date: movie.release_date
                })),
                next: data.page < data.total_pages ? `${process.env.URL}?page=${data.page + 1}` : undefined,
                previous: data.page > 1 ? `${process.env.URL}?page=${data.page - 1}` : undefined,
                first: data.total_pages > 0 ? `${process.env.URL}?page=1` : undefined,
                last: data.total_pages > 0 ? `${process.env.URL}?page=${data.total_pages}` : undefined
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw new Error('Failed to fetch popular movies');
        }
    }

    static async topRated(page: number): Promise<PaginatedResponse<Movie>> {
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

            const data = await response.json();

            // Pastikan format data sesuai dengan tipe PaginatedResponse
            const paginatedResponse: PaginatedResponse<Movie> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: data.results.map((movie: any) => ({
                    id: movie.id,
                    title: movie.title,
                    poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                    backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                    overview: movie.overview,
                    popularity: movie.popularity,
                    release_date: movie.release_date
                })),
                next: data.page < data.total_pages ? `${process.env.URL}?page=${data.page + 1}` : undefined,
                previous: data.page > 1 ? `${process.env.URL}?page=${data.page - 1}` : undefined,
                first: data.total_pages > 0 ? `${process.env.URL}?page=1` : undefined,
                last: data.total_pages > 0 ? `${process.env.URL}?page=${data.total_pages}` : undefined
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
            throw new Error('Failed to fetch top rated movies');
        }
    }

    static async detail(id: string): Promise<Movie> {
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

            const data = await response.json();

            // Pastikan format data sesuai dengan tipe Movie
            const movie: Movie = {
                id: data.id,
                title: data.title,
                poster_path: `https://image.tmdb.org/t/p/original${data.poster_path}`,
                backdrop_path: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
                overview: data.overview,
                popularity: data.popularity,
                release_date: data.release_date
            };

            return movie;
            
        } catch (error) {
            console.error('Error fetching movie details:', error);
            throw new Error('Failed to fetch movie details');
        }
    }

    
}