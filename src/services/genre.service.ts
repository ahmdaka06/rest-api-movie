import fetch from 'node-fetch';
import { Genre } from '../models/genre.model';

export class GenreService {
    static async get(): Promise<Genre[]> {
        try {
            const url = `${process.env.TMDB_API_URL}/genre/movie/list`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                }
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data.genres;
        } catch (error) {
            console.error('Error fetching genres:', error);
            throw new Error('Failed to fetch genres');
        }
    }
}