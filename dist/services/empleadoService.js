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
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleadoService = void 0;
const empleadoRepository_1 = require("../repositories/empleadoRepository");
exports.empleadoService = {
    crearEmpleado(empleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoRepository_1.empleadoRepository.crearEmpleado(empleado);
        });
    },
    obtenerEmpleados() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoRepository_1.empleadoRepository.obtenerEmpleados();
        });
    },
    obtenerEmpleadoPorID(idEmpleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoRepository_1.empleadoRepository.obtenerEmpleadoPorID(idEmpleado);
        });
    },
    obtenerEmpleadoPorUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoRepository_1.empleadoRepository.obtenerEmpleadoPorUsuario(usuario);
        });
    },
    actualizarEmpleado(idEmpleado, empleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoRepository_1.empleadoRepository.actualizarEmpleado(idEmpleado, empleado);
        });
    },
    borrarEmpleado(idEmpleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoRepository_1.empleadoRepository.borrarEmpleado(idEmpleado);
        });
    }
};
