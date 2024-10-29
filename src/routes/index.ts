import { Router } from "express"
import empleadoRoutes from "./empleadoRoutes"
//import productoRoutes from "./productoRoutes"

const router = Router()

router.use('/empleados',empleadoRoutes)
//router.use('/productos',productoRoutes)

export default router