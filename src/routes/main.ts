import express from "express";
import { 
    MovieController
} from "../controllers/movie.controller";

export const router = express.Router();

router.get("/api/v2", (req, res) => { 
    res
        .json({ message: "Hello, World!" })
        .status(200);
});

router.get("/api/v2/popular", MovieController.popular);
router.get("/api/v2/top_rated", MovieController.topRated);
router.get("/api/v2/upcoming", MovieController.upcoming);
router.get("/api/v2/now_playing", MovieController.nowPlaying);
router.get("/api/v2/movie/:id", MovieController.detail);


