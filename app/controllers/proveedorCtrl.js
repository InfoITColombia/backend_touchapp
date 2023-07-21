const proveedorModel = require("../models/proveedorModel.js")

async function registrarProveedor(req, res, next){
    try {
        const {N_PROVEEDOR, DIR_PROVEEDOR, TEL_PROVEEDOR} = req.body
        proveedorModel.registrarProveedor(N_PROVEEDOR,DIR_PROVEEDOR,TEL_PROVEEDOR)
        return res.status(201).json({ status:true, message: 'Proveedor agregado exitosamente.' });
    } catch (error) {
        console.log("ERROR REGISTRANDO PROVEEDOR ",error)
        return res.status(500).json({ status:false, error: 'Ocurrió un error al agregar el proveedor.' });
    }
}

module.exports = {
    registrarProveedor,
  };