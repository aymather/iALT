const express = require('express');
const { Participant } = require('../models');

const router = express.Router();

router.get('/p/all', async (req, res) => {

    try {

        const participants = await Participant.find();
        const ps = participants.map(p => p.getData());
        return res.json(ps);

    } catch (error) {
        return res.status(500).json(error);
    }

})

router.post('/p/new', async (req, res) => {

    try {
        const p = new Participant({
            data: req.body
        })
        const sp = await p.save();
        return res.json(sp.getData());
    } catch (err) {
        return res.status(500).json(err);
    }

})

router.post('/p/save', async (req, res) => {

    try {
        const { participant, sequence } = req.body;
    
        const p = await Participant.findById(participant.id);
        if(participant.training === "1") {
            p.trialseq_training = sequence
        } else {
            p.trialseq = sequence
        }

        await p.save()

        return res.json(req.body);
    } catch (error) {
        return res.status(500).json(error)
    }

})

module.exports = router