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
        const k_proveedor = req.params.K_PROVEEDOR;
        console.log("K_PROVEEDOR ES ", req.params.K_PROVEEDOR)
        const proveedor = await proveedorModel.obtenerProveedor(k_proveedor)
        if (proveedor!= null){
            res.status(201).json(proveedor)
        }else{
            res.status(501).json({status:false, message:"No se encontró un proveedor con el código solicitado"})
        }
    }catch(error){
            res.status(501).json({status:false, message:"No se encontró un proveedor con el código solicitado"})
    }
}

async function obtenerProveedores(req,res,next){
    try {
        const proveedores = await proveedorModel.obtenerProveedores()
        if (proveedores){
            res.status(201).json(proveedores)
        }
    } catch (error) {
        res.status(501).json({status:false,message:"No se encontraron proveedores"})
    }
}

module.exports = {
    registrarProveedor,
    obtenerProveedor,
    obtenerProveedores
  };