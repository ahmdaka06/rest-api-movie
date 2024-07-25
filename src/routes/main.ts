import express from "express";
import { 
    PopularController 
} from "../controllers/popular.controller";

export const router = express.Router();

router.get("/api/v2", (req, res) => { 
    res
        .json({ message: "Hello, World!" })
        .status(200);
});

router.get("/api/v2/popular", PopularController.list);

