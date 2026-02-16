const express = require("express");
const router = express.Router();

const awardController = require("../controllers/awardController");


router.post("/create", awardController.createAward);

router.get("/list", awardController.listAwards);

router.delete("/delete/:id", awardController.deleteAward);

module.exports = router;