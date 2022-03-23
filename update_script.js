let firstPart = require('./sources/first_part.json');
let secondPart = require('./sources/second_part.json');
const {db} = require('./config/config');


// async function updateIvana(){
//     let sequencesRef = db.collection('sequences');
//     let sequences;
//     sequences = sequencesRef.where("lineage", 'in', ["IVANA", "ORYCO"]);
//     let result = await sequences.get();
//     let ids = result.docs.map(doc => doc.data()["id"]);

    
//     for(let i = 0; i < ids.length; i++){
//         console.log("Actualizando secuencia " + ids[i]);
//         sequencesRef.doc(ids[i].toString()).update({"lineage": "ORYCO/IVANA"});
//     }
// }
// updateIvana();
