export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    popularity: number;
    release_date: string;
}

export interface PaginatedResponse<T> {
    page: number;
    total_pages: number;
    total_results: number;
    data: T[];
    next?: string;     // URL untuk halaman berikutnya
    previous?: string; // URL untuk halaman sebelumnya
    first?: string;    // URL untuk halaman pertama
    last?: string;     // URL untuk halaman terakhir
}