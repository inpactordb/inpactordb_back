let firstPart = require('./sources/first_part.json');
let secondPart = require('./sources/second_part.json');
const {db} = require('./config/config');
let total = secondPart.length+firstPart.length;
console.log(total);

// async function carga(){
//     for(let i = 19001; i < secondPart.length; i++){
//         console.log("Cargando la secuencia no redundante numero: " + i);
//         let res = await db.collection('sequences').doc(secondPart[i]["id"].toString()).set(secondPart[i]);
//     }
    
// }
// carga();