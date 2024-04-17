const express = require('express');
const cors = require('cors');

// Definir aplicación con express
const app = express();
app.use(cors());
app.use(express.json());

//Conexión a la base de datos
//pgpromise normalmente puede recibir un objeto de opciones. No le vamos a pasar ninguna opción
//pero vamos a pasarle los parámetros aún así
const pgp = require("pg-promise")();
const cn = {
    host: 'localhost',
    port: '5432',
    database: 'blog2',
    user: 'postgres',
    password: 'postgres',
    allowExitOnIdle: true
}
const db = pgp(cn);

/*Aquí empiezan los endpoints */
//Definir un primer end point de prueba , request y respond
app.get("/hello",(req, res) => {
    // res.json({message:"hola"})
    db.any('SELECT * FROM post')
    .then((data)=>res.json(data))
    .catch((error)=> console.log('ERROR: ', error))
})

//Levantar el servidor y decirle que está corriendo
app.listen(8000, () => {
    console.log("Servidor corriendo en epuerto 8000");
})