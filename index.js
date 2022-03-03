//Cargar configuracion
const CONFIG = require('./config/config');
// *Cargamos el fichero app.js con la configuración de Express
const app = require('./config/app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
// Le indicamos a Mongoose que haremos la conexión con Promesas
app.listen(CONFIG.PORT, () => {
    console.log(`servidor corriendo en ${CONFIG.SERVER}:${CONFIG.PORT}`);
});