const express = require("express");
const router = express.Router();
const emp = require("../controllers/employeeController");

router.post("/", emp.createEmployee);
router.get("/", emp.getEmployees);
router.get("/:id", emp.getEmployee);
router.put("/:id", emp.updateEmployee);
router.delete("/:id", emp.deleteEmployee);

module.exports = router;
