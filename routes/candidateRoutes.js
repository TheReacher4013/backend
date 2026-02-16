const express = require ("express");
const router = express.Router();

const candidateController = require("../controllers/candidateController")

router.post("/create", candidateController.createCandidate);
router.get("/list", candidateController.listCandidate);
router.delete("/delete/:id", candidateController.deleteCandidate)

module.exports = router;