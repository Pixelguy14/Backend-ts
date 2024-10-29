"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoRoutes_1 = __importDefault(require("./empleadoRoutes"));
//import productoRoutes from "./productoRoutes"
const router = (0, express_1.Router)();
router.use('/empleados', empleadoRoutes_1.default);
//router.use('/productos',productoRoutes)
exports.default = router;
