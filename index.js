

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
            console.log(err);
        }
    )
});

app.post('/login', (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;
    //console.log("REQUEST ES " & req)

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

app.listen(3002, ()=>{
    console.log("Servidor corriendo")
})