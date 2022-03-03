const {db} = require('../../config/config');
class SequenceModel{
    async getSequences(filter){
        // const {superfamily, lineage, specie_family, specie, start, end} = filter;
        // let sequencesRef = db.collection('sequences');
        // let sequences = await sequencesRef.where('superfamily', '==', superfamily).where('lineage', '==', lineage).
        //     where('specie_family', '==', specie_family).where('specie', '==', specie).
        //     get();
        // let res = sequences.docs.map(doc => doc.data());
        // if(res.length==0)
        //     res = {
        //         "msg": "no sequence matches filters "
        //     }
        // return res;
        let sequencesRef = db.collection('sequences');
        let nParameters = Object.keys(filter).length;
        let sequences;
        for(let i = 0; i < nParameters; i++){
            let key = Object.keys(filter)[i];
            if(i==0){
                sequences = sequencesRef.where(key, '==', filter[key]);
            }else{
                sequences = sequences.where(key, '==', filter[key]);
            }
        }
        let result = await sequences.get();
        let res = result.docs.map(doc => doc.data());
        if(res.length==0)
            res = {
                "msg": "no sequence matches filters "
            }
        return res;
        
    }
    async getSequence(id){
        let sequencesRef = db.collection('sequences');
        let sequence = await sequencesRef.doc(id).get();
        let res = sequence.data();
        if(res==undefined)
            res = {
                "msg": "sequence not found"
            }
        return res;
    }
}

module.exports = SequenceModel;