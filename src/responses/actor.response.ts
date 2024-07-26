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

export type TMDBActorDetailResponse = {
    id: number
    imdb_id: string
    name: string
    adult: boolean
    also_known_as: any[]
    biography: string
    birthday: string
    deathday: any
    gender: number
    homepage: any
    known_for_department: string
    place_of_birth: string
    popularity: number
    profile_path: string
}
