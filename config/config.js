//Import firebase admin
let admin = require("firebase-admin");
const PORT = process.env.port || 3800;
const SERVER = "127.0.0.1";
//Import firestore key
let serviceAccount = require("./secret_key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore(); 
module.exports = {
    PORT,
    SERVER,
    db,
}