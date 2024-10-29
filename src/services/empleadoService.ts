import { empleadoRepository } from "../repositories/empleadoRepository"
import { IEmpleado } from "../interfaces/empleadoInterface"

export const empleadoService = {
    async crearEmpleado(empleado: IEmpleado) {
        return await empleadoRepository.crearEmpleado(empleado)
    },
    async obtenerEmpleados() {
        return await empleadoRepository.obtenerEmpleados()
    },
    async obtenerEmpleadoPorID(idEmpleado: string) {
        return await empleadoRepository.obtenerEmpleadoPorID(idEmpleado)
    },
    async obtenerEmpleadoPorUsuario(usuario: string) {
        return await empleadoRepository.obtenerEmpleadoPorUsuario(usuario)
    },
    async actualizarEmpleado(idEmpleado: string, empleado: IEmpleado) {
        return await empleadoRepository.actualizarEmpleado(idEmpleado, empleado)
    },
    async borrarEmpleado(idEmpleado: string) {
        return await empleadoRepository.borrarEmpleado(idEmpleado)
    }
}
