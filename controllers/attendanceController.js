const Attendance = require("../models/Attendance");

exports.checkIn = async (req, res) => {
    try {
        const record = await Attendance.create(req.body);
        res.json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.checkOut = async (req, res) => {
    try {
        const updated = await Attendance.findByIdAndUpdate(
            req.params.id,
            { CheckOut: req.body.CheckOut },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllAttendance = async (req, res) => {
    try {
        const data = await Attendance.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getByEmployee = async (req, res) => {
    try {
        const data = await Attendance.find({ Employeeid: req.params.empid });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteAttendance = async (req, res) => {
    try {
        await Attendance.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
