"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetLoginAttempts = exports.incrementLoginAttempts = exports.loginAttemptMiddleware = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default();
const loginAttemptMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario } = req.body;
    const key = `login_attempts_${usuario}`;
    // Detectamos intentos fallidos
    const attempts = yield redis.get(key);
    if (attempts && parseInt(attempts) > 5) {
        // ttl son cantidad de segundos 
        const ttl = yield redis.ttl(key);
        return res.status(429).json({ message: `Cuenta bloqueada, intente en ${ttl / 60} minutos` });
    }
    next();
});
exports.loginAttemptMiddleware = loginAttemptMiddleware;
const incrementLoginAttempts = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const key = `login_attempts_${usuario}`;
    // Detectamos intentos fallidos
    const attempts = yield redis.incr(key);
    if (attempts === 1) {
        // Ya se superaron los intentos entonces bloqueamos la cuenta
        yield redis.expire(key, '300'); // en cantidad de segundos
    }
});
exports.incrementLoginAttempts = incrementLoginAttempts;
// Funcion que reinicia attempts despues de que se bloquease la cuenta
const resetLoginAttempts = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const key = `login_attempts_${usuario}`;
    // Detectamos intentos fallidos
    yield redis.del(key);
});
exports.resetLoginAttempts = resetLoginAttempts;
