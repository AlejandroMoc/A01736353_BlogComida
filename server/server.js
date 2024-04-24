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
    database: 'prueba1',
    user: 'postgres',
    password: 'L4PC3SMIA',
    allowExitOnIdle: true
}
const db = pgp(cn);

/*Aquí empiezan los endpoints */
//Definir un primer end point de prueba , request y respond

//Obtener data data de la base de datos
app.get("/blog",(req, res) => {
    // res.json({message:"hola"})
    db.any('SELECT * FROM post')
    .then((data)=>res.json(data))
    .catch((error)=> console.log('ERROR: ', error))
})

/* app.get("/autor/:id_author",(req, res) => {
    db.any('SELECT * FROM autor')
    .then((data)=>res.json(data))
    .catch((error)=> console.log('ERROR: ', error))
}) */

app.get('/autor/:id_author',(req, res) => {
    db.one('SELECT * FROM autor WHERE id_author=$1',[req.params.id_author])
    .then((data)=>res.json(data))
    .catch((error)=> console.log('ERROR: ', error))
})

//Definir para un post individual
app.get('/posts/:id_post',(req, res) => {
    //one en vez de any porque únicamente queremos 1 id
    //entre corchetes recibir parámetros
    db.one('SELECT * FROM post WHERE id_post=$1',[req.params.id_post])
    .then((data)=>res.json(data))
    //Cachar error
    .catch((error)=> console.log('ERROR: ', error))
})

//Levantar el servidor y decirle que está corriendo
app.listen(8000, () => {
    console.log("Servidor corriendo en el puerto 8000");
})