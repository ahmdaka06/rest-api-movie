export interface PaginatedResponse<T> {
    page: number;
    total_pages: number;
    total_results: number;
    data: T[];
}