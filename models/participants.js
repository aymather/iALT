const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
    created_at: { type: Date, default: new Date() },
    data: {
        name: { type: String, required: true },
        subject_number: { type: String, required: true },
        age: { type: String, required: true },
        gender: { type: String, required: true },
        handedness: { type: String, required: true },
        buttons: { type: Number, required: true }
    },
    trialseq_training: { type: Array, required: true, default: [] },
    trialseq: { type: Array, required: true, default: [] },
    time: { type: Array, required: true, default: [] }
})

module.exports = mongoose.model('participants', ParticipantSchema);