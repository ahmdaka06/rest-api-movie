import { Request, Response, NextFunction } from 'express';
import { MovieService } from '../services/movie.service';

export class MovieController {
    static async popular(req: Request, res: Response, next: NextFunction) {
        let page = req.query.page ? parseInt(req.query.page as string) : 1;
        try {
            const popularMovies = await MovieService.getPopularMovie(page);
            
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
            const topRatedMovies = await MovieService.getTopRatedMovie(page);
            
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

    static async upcoming(req: Request, res: Response, next: NextFunction) {
        let page = req.query.page ? parseInt(req.query.page as string) : 1;
        try {
            const upcomingMovies = await MovieService.getUpcomingMovie(page);
            
            return res
                .json(upcomingMovies)
                .status(200);
        } catch (error) {
            console.error('Error in MovieController.upcoming:', error);
            res
                .status(500)
                .json({ error: 'Failed to fetch upcoming movies' });
        }
    }

    static async nowPlaying(req: Request, res: Response, next: NextFunction) {
        let page = req.query.page ? parseInt(req.query.page as string) : 1;
        try {
            const nowPlayingMovies = await MovieService.getNowPlaying(page);
            
            return res
                .json(nowPlayingMovies)
                .status(200);
        } catch (error) {
            console.error('Error in MovieController.nowPlaying:', error);
            res
                .status(500)
                .json({ error: 'Failed to fetch now playing movies' });
        }
    }

    static async detail(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id;
        try {
            const movie = await MovieService.getDetailByIdMovie(id);
            
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