import { empleadoModel } from "../models/empleadoModel"
import { IEmpleado } from "../interfaces/empleadoInterface"

export const empleadoRepository = {
    async crearEmpleado(empleado: IEmpleado) {
        return await empleadoModel.crearEmpleado(empleado)
    },
    async obtenerEmpleados() {
        return await empleadoModel.obtenerEmpleados()
    },
    async obtenerEmpleadoPorID(idEmpleado: string) {
        return await empleadoModel.obtenerEmpleadoPorID(idEmpleado)
    },
    async obtenerEmpleadoPorUsuario(usuario: string) {
        return await empleadoModel.obtenerEmpleadoPorUsuario(usuario)
    },
    async actualizarEmpleado(idEmpleado: string, empleado: IEmpleado) {
        return await empleadoModel.actualizarEmpleado(idEmpleado, empleado)
    },
    async borrarEmpleado(idEmpleado: string) {
        return await empleadoModel.borrarEmpleado(idEmpleado)
    }
}
