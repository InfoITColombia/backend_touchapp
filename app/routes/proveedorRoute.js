const express = require("express")
const router = express.Router()
const proveedorCtrl = require("../controllers/proveedorCtrl.js")

router.post("/proveedor/nuevo", proveedorCtrl.registrarProveedor)

router.get("/proveedor/:K_PROVEEDOR", proveedorCtrl.obtenerProveedor)
router.get("/proveedor/", proveedorCtrl.obtenerProveedores)

module.exports = router;