const PDF = require("pdfkit");

function generatePayslip(payroll, res) {
    const doc = new PDF();

    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    doc.fontSize(18).text("Payslip");
    doc.moveDown();

    doc.fontSize(12).text("Employee ID: " + payroll.Employeeid);
    doc.text("Month: " + payroll.Month);
    doc.text("Base Salary: " + payroll.BaseSalary);
    doc.text("Bonus: " + payroll.Bonus);
    doc.text("Deduction: " + payroll.Deduction);
    doc.text("Net Salary: " + payroll.NetSalary); // correct field name

    doc.end();
}

module.exports = generatePayslip;
