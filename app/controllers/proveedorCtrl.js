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

async function obtenerProveedor(req,res,next){
    try{
        const {K_PROVEEDOR} = req.body
        const proveedor = await proveedorModel.obtenerProveedor(K_PROVEEDOR)
        if (proveedor){
            res.status(201).json({K_PROVEEDOR : proveedor.K_PROVEEDOR, N_PROVEEDOR : proveedor.N_PROVEEDOR})
        }
    }catch(error){
            res.status(501).json({status:false, message:"No se encontró un proveedor con el código solicitado"})
    }
}

module.exports = {
    registrarProveedor,
    obtenerProveedor,
  };