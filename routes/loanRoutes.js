const express = require("express");
const router = express.Router();

const loanController = require("../controllers/loanController");

router.post("/create", loanController.createLoan);
router.get("/listLoan", loanController.listLoans);
router.delete("/delete/:id", loanController.deleteLoan);

module.exports = router;