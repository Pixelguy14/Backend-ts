import { Router } from "express"
import { authMiddleware } from "../middleware/authMiddleware"
import { rateLimitMiddleware } from "../middleware/rateLimitMiddleware"
import { empleadoController } from "../controllers/empleadoController"

const router = Router()

router.post('/empleados', 
    // authMiddleware,
    rateLimitMiddleware,
    empleadoController.crearEmpleado
)
router.get('/empleados', 
    // authMiddleware,
    rateLimitMiddleware,
    empleadoController.obtenerEmpleados
)
router.get('/empleados/:idEmpleado', 
    // authMiddleware,
    rateLimitMiddleware,
    empleadoController.obtenerEmpleadoPorId
)
router.put('/empleados/:idEmpleado', 
    // authMiddleware,
    rateLimitMiddleware,
    empleadoController.actualizarEmpleado
)
router.delete('/empleados/:idEmpleado', 
    // authMiddleware,
    rateLimitMiddleware,
    empleadoController.borrarEmpleado
)

export default router