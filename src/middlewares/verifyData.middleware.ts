import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateResult = (_req: Request, res: Response, next: NextFunction) => {

    const loginSchema = z.object({
        username: z.string(),
        password: z.string(),
        email: z.string()
    })

    let c = 0

    if (c === 1) return next();

}

