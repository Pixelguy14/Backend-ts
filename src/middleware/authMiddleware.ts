import { Request, Response, NextFunction } from "express"
import Jwt from "jsonwebtoken"

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //El signo de interrogacion nos evita que crashee si no recibe autorizacion y despues separamos la peticion con un espacio y agarramos la segunda parte
    const token = req.headers.authorization?.split(' ')[1]
    if (!token){
        return res.status(401).json({message: 'No Autorizado'})
    }
    Jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Token Invalido'})
        }
        req.body = decoded
        next()
    })
    
}