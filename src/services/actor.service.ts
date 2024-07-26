import { setPathImage } from '../helpers/utils';
import { Actor, PaginatedResponse } from '../models/actor.model';
import { Movie } from '../models/movie.model';
import { TMDBAPIResponse, TMDBGenreResponse } from "../responses/movie.response";
import { GenreService } from "./genre.service";

export class ActorService {
    static async getActors(page: number = 1): Promise<PaginatedResponse<Actor>> {
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

            const actors: Actor[] = data.results.map((actor) => ({
                id: actor.id,
                name: actor.name,
                original_name: actor.original_name,
                profile_path: setPathImage(actor.profile_path),
                popularity: actor.popularity
            }));

            const paginatedResponse: PaginatedResponse<Actor> = {
                page: data.page,
                total_pages: data.total_pages,
                total_results: data.total_results,
                data: actors,
                next: data.page < data.total_pages ? `${process.env.URL}/actors?page=${data.page + 1}` : undefined,
                previous: data.page > 1 ? `${process.env.URL}/actors?page=${data.page - 1}` : undefined,
                first: data.total_pages > 0 ? `${process.env.URL}/actors?page=1` : undefined,
                last: data.total_pages > 0 ? `${process.env.URL}/actors?page=${data.total_pages}` : undefined
            };

            return paginatedResponse;
            
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw new Error('Failed to fetch popular movies');
        }
    }
}