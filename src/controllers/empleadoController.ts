import { Request, Response } from "express"
import { empleadoService } from "../services/empleadoService"
import bcrypt from 'bcrypt'

export const empleadoController = {
    async crearEmpleado(req: Request, res: Response) {
        const empleado = req.body
        try {
            const userExists = await empleadoService.obtenerEmpleadoPorUsuario(empleado.usuario)
            if (userExists){
                res.status(400).json({error: "El usuario ya existe"})    
            }
            else {
                const saltRound = 10
                empleado.password = await bcrypt.hash(empleado.password,saltRound)

                const idEmpleado = await empleadoService.crearEmpleado(empleado)
                res.status(201).json({idEmpleado})
            }
        } catch (error) {
            res.status(500).json({error: "Error del servidor"})
        }
    },
    async obtenerEmpleados(req: Request, res: Response) {
        try {
            const empleados = await empleadoService.obtenerEmpleados()
            res.status(200).json({empleados})
        } catch (error) {
            res.status(500).json({error: "Error del servidor"})
        }
    },
    async obtenerEmpleadoPorId(req: Request, res: Response) {
        const {idEmpleado} = req.params
        try {
            const empleado = await empleadoService.obtenerEmpleadoPorID(idEmpleado)
            res.status(201).json({empleado})
        } catch (error) {
            res.status(500).json({error: "Error del servidor"})
        }
    },
    async actualizarEmpleado(req: Request, res: Response) {
        const {idEmpleado} = req.params
        const empleado = req.body
        try {
            const saltRound = 10
            empleado.password = await bcrypt.hash(empleado.password,saltRound)
            const updateId = await empleadoService.actualizarEmpleado(idEmpleado, empleado)
            res.status(201).json({updateId})
        } catch (error) {
            res.status(500).json({error: "Error del servidor"})
        }
    },
    async borrarEmpleado(req: Request, res: Response) {
        const {idEmpleado} = req.params
        try {
            await empleadoService.borrarEmpleado(idEmpleado)
            res.status(201).json({message: 'Borrado'})
        } catch (error) {
            res.status(500).json({error: "Error del servidor"})
        }
    }
}