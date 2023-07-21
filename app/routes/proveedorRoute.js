const express = require("express")
const router = express.Router()
const proveedorCtrl = require("../controllers/proveedorCtrl.js")

router.post("/proveedor/nuevo", proveedorCtrl.registrarProveedor)

module.exports = router;