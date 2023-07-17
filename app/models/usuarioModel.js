const db = require('../../config/mysqlconfig.js');

//auth
async function autenticarUsuario(nombreUsuario, contraseña) {
    const [rows] = await db.promise().query('SELECT * FROM USUARIO WHERE N_USUARIO = ? ', [nombreUsuario]);
    return rows[0] || null;
  }
  
  module.exports = {
    autenticarUsuario,
  };