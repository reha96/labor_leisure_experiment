const express = require("express");
const router = express.Router();
const {
  createParticipant,
  getParticipants,
  getParticipant,
  updateParticipant,
} = require("../controllers/participantController");

router.get("/", getParticipants);

router.get("/:id", getParticipant);

router.post("/", createParticipant);

router.patch("/:id", updateParticipant);

module.exports = router;
