import { TMDBGenreResponse } from "./genre.response";

export type TMDBMovieResponse = {
    id: number;
    genre_ids: number[];
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    popularity: number;
    release_date: string;
}

export type TMDBAllMovieResponse = {
    page: number;
    total_pages: number;
    total_results: number;
    results: TMDBMovieResponse[];
}

export type TMDBMovieDetailResponse = {
    id: number;
    genres: TMDBGenreResponse[];
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    popularity: number;
    release_date: string;
    status: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
}