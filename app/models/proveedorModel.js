const db = require("../../config/mysqlconfig.js")

async function registrarProveedor(N_PROVEEDOR, DIR_PROVEEDOR, TEL_PROVEEDOR) {
    try {
      // Insertar el nuevo proveedor en la base de datos
      await db.promise().query(
        'INSERT INTO PROVEEDOR (N_PROVEEDOR, DIR_PROVEEDOR, TEL_PROVEEDOR) VALUES (?, ?, ?)',
        [N_PROVEEDOR, DIR_PROVEEDOR, TEL_PROVEEDOR]
      );
  
      console.log('Proveedor agregado exitosamente.');
    } catch (error) {
      console.error('Error al agregar el proveedor:', error);
      throw new Error('Ocurrió un error al agregar el proveedor.');
    }
  }
  
  module.exports = {
    registrarProveedor,
  };
