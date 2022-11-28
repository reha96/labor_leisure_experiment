const Participant = require("../models/participantModel");
const mongoose = require("mongoose");


// create entry
const createParticipant = async (req, res) => {
  const {
    treatment,
    lottery,
    platform,
    browser,
    ID,
    attention1,
    attention2,
    clikcedOkToSwitch,
    timeChoice,
    leisureTime,
    laborTime,
    transcription,
  } = req.body;
  try {
    const participant = await Participant.create({
      treatment,
      lottery,
      platform,
      browser,
      ID,
      attention1,
      attention2,
      clikcedOkToSwitch,
      timeChoice,
      leisureTime,
      laborTime,
      transcription,
    });
    res.status(200).json(participant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get entries
const getParticipants = async (req, res) => {
  const participants = await Participant.find({}).sort({ createdAt: -1 });
  res.status(200).json(participants);
};


// get a single entry
const getParticipant = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such participant" });
  // }

  const participant = await Participant.find({$text: {$search: id}});

  if (!participant) {
    return res.status(404).json({ error: "No such participant" });
  }

  res.status(200).json(participant);
};

// update one entry (example which can be modified by editing the fields)
const updateParticipant = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such participant" });
  // }

  const participant = await Participant.findOneAndUpdate(
    { ID: id },
    {
      ...req.body,
    }
  );

  if (!participant) {
    return res.status(404).json({ error: "No such participant" });
  }

  res.status(200).json(participant);
};

module.exports = {
  createParticipant,
  getParticipants,
  getParticipant,
  updateParticipant,
};
