const usuarioModel = require('../models/usuarioModel');

// Controlador para autenticar un usuario
async function autenticarUsuario(req, res, next) {
  try {
    const { N_USUARIO, PWD_USUARIO } = req.body;
    const usuario = await usuarioModel.autenticarUsuario(N_USUARIO, PWD_USUARIO);
    
    if (usuario) {
        console.log(usuario.PWD_USUARIO)
        if (usuario.PWD_USUARIO == PWD_USUARIO){
            res.json({ status:true, message: 'Autenticación exitosa' });
        }
      else{
        res.json({ status:false, message: 'Credenciales inválidas' });
      }
    } else {
     //res.status(401).json({ status:false, message: 'El usuario no existe' });
        res.json({status:false,message:'El usuario no existe'})
    }
  } catch (error) {
    next(error);
  }
}




module.exports = {
  autenticarUsuario,
};