const router = require("express").Router();
const c = require("../controllers/payrollController");

router.post("/", c.createPayroll);

router.get("/", c.getAllPayroll);

router.get("/employee/:empid", c.getPayrollByEmployee);

router.put("/:id", c.updatePayroll);

router.delete("/:id", c.deletePayroll);

module.exports = router;
