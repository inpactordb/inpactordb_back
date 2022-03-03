let SequenceModel = require('../models/SequenceModel');
const sequence = new SequenceModel();
class SequenceController{
    async getSequences(req, res){
        const {body} = req;
        let response = null;
        response = await sequence.getSequences(body);
        res.json(response);
    }
    async getSequence(req, res){
        const {query} = req;
        let response = null;
        response = await sequence.getSequence(query.id);
        res.json(response);
    }
}

module.exports = SequenceController;