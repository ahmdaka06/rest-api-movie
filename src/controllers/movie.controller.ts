import { Request, Response, NextFunction } from 'express';
import { MovieService } from '../services/movie.service';

export class MovieController {
    static async popular(req: Request, res: Response, next: NextFunction) {
        let page = req.query.page ? parseInt(req.query.page as string) : 1;
        try {
            const popularMovies = await MovieService.popular(page);
            
            return res
                .json(popularMovies)
                .status(200);
        } catch (error) {
            console.error('Error in MovieController.popular:', error);
            res
                .status(500)
                .json({ error: 'Failed to fetch popular movies' });
        }
    }

    static async topRated(req: Request, res: Response, next: NextFunction) {
        let page = req.query.page ? parseInt(req.query.page as string) : 1;
        try {
            const topRatedMovies = await MovieService.topRated(page);
            
            return res
                .json(topRatedMovies)
                .status(200);
        } catch (error) {
            console.error('Error in MovieController.topRated:', error);
            res
                .status(500)
                .json({ error: 'Failed to fetch top rated movies' });
        }
    }

    static async detail(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id;
        try {
            const movie = await MovieService.detail(id);
            
            return res
                .json(movie)
                .status(200);
        } catch (error) {
            console.error('Error in MovieController.detail:', error);
            res
                .status(500)
                .json({ error: 'Failed to fetch movie details' });
        }
    }
}