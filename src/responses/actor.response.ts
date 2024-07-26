import { TMDBMovieResponse } from "./movie.response";

export type TMDBActorResponse = {
    id: number;
    name: string;
    original_name: string;
    profile_path: string;
    popularity: number;
    known_for: TMDBMovieResponse[];
}

export type TMDBAllActorResponse = {
    page: number;
    total_pages: number;
    total_results: number;
    results: TMDBActorResponse[];
}
