const express = require("express");
const router = express.Router();
const leave = require("../controllers/leaveController");

router.post("/", leave.applyLeave);
router.get("/", leave.getLeaves);
router.get("/:id", leave.getLeave);
router.put("/:id", leave.updateLeave);
router.delete("/:id", leave.deleteLeave);

module.exports = router;
