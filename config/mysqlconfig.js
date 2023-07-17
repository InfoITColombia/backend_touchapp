const mysql = require("mysql2")

//CONFIG
const dbConfig = {
    user : "touchapp",
    host : "localhost",
    password : "touchapp",
    database : "touchapp",
    port:3306,
}

const conn = mysql.connect(dbConfig);

conn.connect((err)=>
{
    if (err){
        console.error("Error al conectar a la base de datos ", err)
        process.exit(1);
    }
    console.log("Conexión exitosa")
}
);

module.exports=conn;