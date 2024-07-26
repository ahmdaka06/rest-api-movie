type Query = string;
type Page = number;
type SearchMovieRequest = {
    query: Query;
    page?: Page;
}