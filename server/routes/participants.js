const express = require("express");
const router = express.Router();
const {
    createParticipant,
} = require('../controllers/participantController')


router.get("/", (req, res) => {
  res.json({ msg: "GET all participants" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single participant" });
});

router.post("/", createParticipant);

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a participant" });
});

module.exports = router;
