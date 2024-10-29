import db from '../config/firebase' // cambia debido al export del otro documento
import { IEmpleado } from '../interfaces/empleadoInterface'

const collectionName = 'empleados_ts'

export const empleadoModel = {
    async crearEmpleado(empleado: IEmpleado) {
        //Se inserta en la coleccion
        const nuevoEmpleado = await db.collection(collectionName).add(empleado)
        return nuevoEmpleado.id
    },
    async obtenerEmpleados() {
        //Intenta obtener todos
        const docs = await db.collection(collectionName).get()
        //lo mapeamos para regresar el objeto con los datos necesarios
        return docs.docs.map((doc:any)=>({
            idEmpleado: doc.id,
            ...doc.data()
        }))
    },
    async obtenerEmpleadoPorID(idEmpleado: string) {
        const exists = await db.collection(collectionName).doc(idEmpleado).get()
        if (!exists.exists) {
            throw new Error('Empleado no encontrado')
        }
        return {
            idEmpleado: exists.id,
            ...exists.data()
        }
    },
    async obtenerEmpleadoPorUsuario(usuario: string) {
        const exists = await db.collection(collectionName).where('usuario', '==', usuario).get()
        if (!exists.empty) {
            return false
        }
        return true
    },
    async actualizarEmpleado(idEmpleado: string, empleado: IEmpleado) {
        await db.collection(collectionName).doc(idEmpleado).set(empleado, { merge: true})
        return idEmpleado
    },
    async borrarEmpleado(idEmpleado: string) {
        await db.collection(collectionName).doc(idEmpleado).delete()
        return idEmpleado
    }
}