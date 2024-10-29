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
exports.empleadoRepository = void 0;
const empleadoModel_1 = require("../models/empleadoModel");
exports.empleadoRepository = {
    crearEmpleado(empleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoModel_1.empleadoModel.crearEmpleado(empleado);
        });
    },
    obtenerEmpleados() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoModel_1.empleadoModel.obtenerEmpleados();
        });
    },
    obtenerEmpleadoPorID(idEmpleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoModel_1.empleadoModel.obtenerEmpleadoPorID(idEmpleado);
        });
    },
    obtenerEmpleadoPorUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoModel_1.empleadoModel.obtenerEmpleadoPorUsuario(usuario);
        });
    },
    actualizarEmpleado(idEmpleado, empleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoModel_1.empleadoModel.actualizarEmpleado(idEmpleado, empleado);
        });
    },
    borrarEmpleado(idEmpleado) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield empleadoModel_1.empleadoModel.borrarEmpleado(idEmpleado);
        });
    }
};
