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
exports.empleadoController = void 0;
const empleadoService_1 = require("../services/empleadoService");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.empleadoController = {
    crearEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleado = req.body;
            try {
                const userExists = yield empleadoService_1.empleadoService.obtenerEmpleadoPorUsuario(empleado.usuario);
                if (userExists) {
                    res.status(400).json({ error: "El usuario ya existe" });
                }
                else {
                    const saltRound = 10;
                    empleado.password = yield bcrypt_1.default.hash(empleado.password, saltRound);
                    const idEmpleado = yield empleadoService_1.empleadoService.crearEmpleado(empleado);
                    res.status(201).json({ idEmpleado });
                }
            }
            catch (error) {
                res.status(500).json({ error: "Error del servidor" });
            }
        });
    },
    obtenerEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empleados = yield empleadoService_1.empleadoService.obtenerEmpleados();
                res.status(200).json({ empleados });
            }
            catch (error) {
                res.status(500).json({ error: "Error del servidor" });
            }
        });
    },
    obtenerEmpleadoPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEmpleado } = req.params;
            try {
                const empleado = yield empleadoService_1.empleadoService.obtenerEmpleadoPorID(idEmpleado);
                res.status(201).json({ empleado });
            }
            catch (error) {
                res.status(500).json({ error: "Error del servidor" });
            }
        });
    },
    actualizarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEmpleado } = req.params;
            const empleado = req.body;
            try {
                const saltRound = 10;
                empleado.password = yield bcrypt_1.default.hash(empleado.password, saltRound);
                const updateId = yield empleadoService_1.empleadoService.actualizarEmpleado(idEmpleado, empleado);
                res.status(201).json({ updateId });
            }
            catch (error) {
                res.status(500).json({ error: "Error del servidor" });
            }
        });
    },
    borrarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEmpleado } = req.params;
            try {
                yield empleadoService_1.empleadoService.borrarEmpleado(idEmpleado);
                res.status(201).json({ message: 'Borrado' });
            }
            catch (error) {
                res.status(500).json({ error: "Error del servidor" });
            }
        });
    }
};
