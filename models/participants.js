const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
    created_at: { type: Date, default: new Date() },
    data: {
        name: { type: String, required: true },
        age: { type: String, required: true },
        gender: { type: String, required: true },
        handedness: { type: String, required: true },
        buttons: { type: String, required: true },
        training: { type: String }
    },
    trialseq_training: { type: Array, required: true, default: [] },
    trialseq: { type: Array, required: true, default: [] },
    time: { type: Array, required: true, default: [] }
})

ParticipantSchema.methods.getData = function() {
    return {
        id: this._id,
        name: this.data.name,
        age: this.data.age,
        gender: this.data.gender,
        handedness: this.data.handedness,
        buttons: this.data.buttons,
        training: this.data.training
    }
}

module.exports = mongoose.model('participants', ParticipantSchema);