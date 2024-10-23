import { Request, Response } from "express";

export const getPlayer = (req: Request, res: Response) => {
    res.json({
        player: "CR&"
    });
}