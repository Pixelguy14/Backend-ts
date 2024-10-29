import { Request, Response, NextFunction } from "express"
import Redis from "ioredis"

const redis = new Redis()

export const loginAttemptMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const { usuario } = req.body
    const key = `login_attempts_${usuario}`
    // Detectamos intentos fallidos
    const attempts = await redis.get(key)
    if (attempts && parseInt(attempts) > 5) {
        // ttl son cantidad de segundos 
        const ttl = await redis.ttl(key)
        return res.status(429).json({message: `Cuenta bloqueada, intente en ${ttl/60} minutos`})
    }
    next()
}

export const incrementLoginAttempts = async(usuario: string) => {
    const key = `login_attempts_${usuario}`
    // Detectamos intentos fallidos
    const attempts = await redis.incr(key)
    if(attempts === 1 ) {
        // Ya se superaron los intentos entonces bloqueamos la cuenta
        await redis.expire(key, '300') // en cantidad de segundos
    }
}

// Funcion que reinicia attempts despues de que se bloquease la cuenta
export const resetLoginAttempts = async(usuario: string) => {
    const key = `login_attempts_${usuario}`
    // Detectamos intentos fallidos
    await redis.del(key)
}