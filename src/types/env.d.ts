declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    URL: string;
    TMDB_API_KEY?: string;
    TMDB_READ_ACCESS_TOKEN?: string;
    TMDB_API_URL?: string;
  }
}