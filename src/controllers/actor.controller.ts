import { NextFunction, Request, Response } from "express";
import { ActorService } from "../services/actor.service";

export class ActorController {
    static async list(req: Request, res: Response, next: NextFunction) {
        let page = req.query.page ? parseInt(req.query.page as string) : 1;
        try {
            const actors = await ActorService.getActors(page);
        
            return res
                .json(actors)
                .status(200);
        } catch (error) {
            console.error('Error in MovieController.popular:', error);
            res
                .status(500)
                .json({ error: 'Failed to fetch popular movies' });
        }
    }

}