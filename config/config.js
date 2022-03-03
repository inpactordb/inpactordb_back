//Import firebase admin
let admin = require("firebase-admin");
const PORT = process.env.PORT || 3800;
const SERVER = "0.0.0.0";
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