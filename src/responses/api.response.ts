export interface TMDBMovieResponse {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    popularity: number;
    release_date: string;
}

export interface TMDBAPIResponse {
    page: number;
    total_pages: number;
    total_results: number;
    results: TMDBMovieResponse[];
}