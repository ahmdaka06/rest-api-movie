import { Request, Response, NextFunction } from 'express';
import { PopularService } from '../services/popular.service';

export class PopularController {
    static async list(req: Request, res: Response, next: NextFunction) {
        let page = req.query.page ? parseInt(req.query.page as string) : 1;
        try {
            const popularMovies = await PopularService.list(page);
            
            return res
                .json(popularMovies)
                .status(200);
        } catch (error) {
            console.error('Error in PopularController.list:', error);
            res
                .status(500)
                .json({ error: 'Failed to fetch popular movies' });
        }
    }
}