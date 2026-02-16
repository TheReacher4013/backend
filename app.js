const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(error => {
        console.log("MongoDB error", error);
    });

app.use("/api/payroll", require("./routes/payrollRoutes"));
app.use("/api/documents", require("./routes/documentRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/leaves", require("./routes/leaveRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/award", require("./routes/awardRoutes"));
app.use("/api/loan", require("./routes/loanRoutes"));
app.use("/api/message", require("./routes/messageRoutes"));
app.use("/api/notice", require ("./routes/noticeRoutes"));
app.use("/api/department", require("./routes/departmentRoutes"));
app.use("/api/candidate", require("./routes/candidateRoutes"));

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("API Running");
});

module.exports = app;
