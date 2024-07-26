import { Movie } from "./movie.model";

export type Actor = {
    id: number;
    name: string;
    original_name: string;
    profile_path: string;
    popularity: number;
}

export type ActorDetail = {
    id: number
    imdb_id: string
    name: string
    adult: boolean
    also_known_as: any[]
    biography: string
    birthday: string
    deathday: any
    gender: string
    homepage: any
    known_for_department: string
    place_of_birth: string
    popularity: number
    profile_path: string
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