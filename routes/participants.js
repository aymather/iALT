const express = require('express');
const { Participant } = require('../models');

const router = express.Router();

router.get('/p/save', async (req, res) => {

    const p = new Participant({
        data: {
            name: 'Alec Mather',
            subject_number: '001',
            age: '23',
            gender: 'M',
            handedness: 'R',
            buttons: 1
        }
    })

    console.log(p);
    const sp = await p.save();

    return res.json(sp);

})

module.exports = router