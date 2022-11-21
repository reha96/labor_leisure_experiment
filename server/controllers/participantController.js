const Participant = require("../models/participantModel");

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


module.exports = {
    createParticipant
}