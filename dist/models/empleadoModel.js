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
exports.empleadoModel = void 0;
const firebase_1 = __importDefault(require("../config/firebase")); // cambia debido al export del otro documento
const collectionName = 'empleados_ts';
exports.empleadoModel = {
    crearEmpleado(empleado) {
        return __awaiter(this, void 0, void 0, function* () {
            //Se inserta en la coleccion
            const nuevoEmpleado = yield firebase_1.default.collection(collectionName).add(empleado);
            return nuevoEmpleado.id;
        });
    },
    obtenerEmpleados() {
        return __awaiter(this, void 0, void 0, function* () {
            //Intenta obtener todos
            const docs = yield firebase_1.default.collection(collectionName).get();
            //lo mapeamos para regresar el objeto con los datos necesarios
            return docs.docs.map((doc) => (Object.assign({ idEmpleado: doc.id }, doc.data())));
        });
    },
    obtenerEmpleadoPorID(idEmpleado) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield firebase_1.default.collection(collectionName).doc(idEmpleado).get();
            if (!exists.exists) {
                throw new Error('Empleado no encontrado');
            }
            return Object.assign({ idEmpleado: exists.id }, exists.data());
        });
    },
    obtenerEmpleadoPorUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield firebase_1.default.collection(collectionName).where('usuario', '==', usuario).get();
            if (!exists.empty) {
                return false;
            }
            return true;
        });
    },
    actualizarEmpleado(idEmpleado, empleado) {
        return __awaiter(this, void 0, void 0, function* () {
            yield firebase_1.default.collection(collectionName).doc(idEmpleado).set(empleado, { merge: true });
            return idEmpleado;
        });
    },
    borrarEmpleado(idEmpleado) {
        return __awaiter(this, void 0, void 0, function* () {
            yield firebase_1.default.collection(collectionName).doc(idEmpleado).delete();
            return idEmpleado;
        });
    }
};
