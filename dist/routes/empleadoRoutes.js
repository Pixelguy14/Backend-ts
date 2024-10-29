"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rateLimitMiddleware_1 = require("../middleware/rateLimitMiddleware");
const empleadoController_1 = require("../controllers/empleadoController");
const router = (0, express_1.Router)();
router.post('/empleados', 
// authMiddleware,
rateLimitMiddleware_1.rateLimitMiddleware, empleadoController_1.empleadoController.crearEmpleado);
router.get('/empleados', 
// authMiddleware,
rateLimitMiddleware_1.rateLimitMiddleware, empleadoController_1.empleadoController.obtenerEmpleados);
router.get('/empleados/:idEmpleado', 
// authMiddleware,
rateLimitMiddleware_1.rateLimitMiddleware, empleadoController_1.empleadoController.obtenerEmpleadoPorId);
router.put('/empleados/:idEmpleado', 
// authMiddleware,
rateLimitMiddleware_1.rateLimitMiddleware, empleadoController_1.empleadoController.actualizarEmpleado);
router.delete('/empleados/:idEmpleado', 
// authMiddleware,
rateLimitMiddleware_1.rateLimitMiddleware, empleadoController_1.empleadoController.borrarEmpleado);
exports.default = router;
