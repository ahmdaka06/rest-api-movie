

export type Movie = {
    id: number;
    genres: string[];
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    popularity: number;
    release_date: string;
}

export type MovieDetail = {
    id: number;
    genres: string[];
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    popularity: number;
    release_date: string;
    status: string;
    tagline: string;
    vote: number;
    vote_count: number;
}

export type Genre = {
    id: number;
    name: string;
}

export type PaginatedResponse<T> = {
    page: number;
    total_pages: number;
    total_results: number;
    data: T[];
    next?: string;     // URL untuk halaman berikutnya
    previous?: string; // URL untuk halaman sebelumnya
    first?: string;    // URL untuk halaman pertama
    last?: string;     // URL untuk halaman terakhir
}