// Cargamos los módulos de express y body-parser
const express = require('express');
const bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
const app = express();
const cors = require('cors');
// Importamos las rutas
const sequences_routes = require('../routes/SequenceRoutes'); 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

//Configuracion de headers cors origin 
app.use((req, res, next) => {//Asignamos a la variable app la función flecha que configurará los encabezados de datos entrantes por la URL
    res.header('Access-Control-Allow-Origin', '*');//Configuramos en el encabezado de respuesta que todos los clientes que se conecten a la URL podrán acceder sin ningún problema
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');//Configuramos en los encabezados de respuesta los datos que podrá ver el cliente
    res.header('Allow', 'GET, POST, PUT, DELETE');//Configuramos en los encabezados de respuesta los métodos permitidos por el cliente
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');//Configuramos en los encabezados de respuesta los métodos a los cuales puede acceder el cliente
    next();//Configuramos un llamado asincrono para que procese datos en caso de que se demore la respuesta
});
// Cargamos las rutas
app.use('/api', sequences_routes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;