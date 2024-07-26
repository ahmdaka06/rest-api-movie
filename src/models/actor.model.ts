import { Movie } from "./movie.model";

export type Actor = {
    id: number;
    name: string;
    original_name: string;
    profile_path: string;
    popularity: number;
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