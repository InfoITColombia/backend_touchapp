

const express = require('express');
const mysql = require("mysql2");
const cors  = require("cors");


const app = express ();

app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user : "touchapp",
    host : "localhost",
    password : "touchapp",
    database : "touchapp",
    port:3306,
    
});

//var db = mysql.createConnection('mysql://sa:g2a0g2a00407@localhost/touchapp?debug=true');

db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + db.database);
  });


app.post("/register", (req, res)=>{
    const N_USUARIO = req.body.N_USUARIO;
    const PWD_USUARIO = req.body.PWD_USUARIO;
    


    db.query(
        "INSERT INTO USUARIO (N_USUARIO,PWD_USUARIO) VALUES (?,?)",
        [N_USUARIO, PWD_USUARIO],
        (err,result)=>{
            if (err){
                console.log(err);
                res.send({message:err})
            }else{
                res.send({message:result})
                console.log(result);
            }

            
        }
    )
});

app.post('/login_old', (req,res)=>{

    const username = req.body.N_USUARIO;
    const password = req.body.PWD_USUARIO;
    console.log("REQUEST ES ")
    console.log(req)

    db.query(
        "SELECT * FROM USUARIO WHERE N_USUARIO = ? and PWD_USUARIO = ?",
        [username, password],
        (err,result)=>{
            if (err){
                res.send({err:err})
                //console.log(err)
            }else{
                if (result.length>0){
                    res.send(result)
                }else{
                    res.send({message:"Wrong username/password!"})
                }
            }
        }
    )
});

app.post('/login', (req,res)=>{

    const username = req.body.N_USUARIO;
    const password = req.body.PWD_USUARIO;
    

    db.query(
        "SELECT * FROM USUARIO WHERE N_USUARIO = ? ",
        [username],
        (err,result)=>{
            if (err){
                res.send({message:err})
                //console.log(err)
            }else{
                if (result.length>0){
                    console.log(result[0].PWD_USUARIO)
                    if (result[0].PWD_USUARIO == password){
                        res.send({message:result[0].N_USUARIO})
                    }
                    else{
                        res.send({message:"Contraseña incorrecta"})
                    }
                    
                }else{
                    res.send({message:"El usuario no existe!"})
                }
            }
        }
    )
});

app.listen(3002, ()=>{
    console.log("Servidor corriendo")
})