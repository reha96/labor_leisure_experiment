const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParticipantSchema = new Schema(
  {
    treatment: { type: String, required: true },
    lottery: { type: String, required: true },
    platform: { type: Object, required: true },
    browser: { type: Object, required: true },
    ID: { type: String, required: true },
    attention1: { type: Number, required: true },
    attention2: { type: Number, required: true },
    clickedOkToSwitch: { type: String, required: true },
    lookedAtSomethingElse: {type: Object, required: true},
    timeChoice: { type: Number, required: true },
    leisureTime: { type: Number, required: true },
    laborTime: { type: Number, required: true },
    transcription: { type: Object, required: true },
  },
  { timestamps: true }
);

ParticipantSchema.index({ID: 'text'});
module.exports = mongoose.model("Participant", ParticipantSchema);
