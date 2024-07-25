import fetch from 'node-fetch'
import { Movie } from '../models/movie.model';
import { PaginatedResponse } from '../responses/api.response';

export class PopularService {
    static async list(page: number): Promise<PaginatedResponse<Movie>> {
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

            const data = await response.json();

            // Pastikan format data sesuai dengan tipe PaginatedResponse
            const paginatedResponse: PaginatedResponse<Movie> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: data.results.map((movie: any) => ({
                    id: movie.id,
                    title: movie.title,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    overview: movie.overview,
                    popularity: movie.popularity,
                    release_date: movie.release_date
                }))
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw new Error('Failed to fetch popular movies');
        }
    }
}