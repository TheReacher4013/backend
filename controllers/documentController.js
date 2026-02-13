const Document = require("../models/Document");

exports.uploadDocument = async (req, res) => {
    try {
        const record = new Document({
            Employeeid: req.body.Employeeid,
            FileName: req.file.filename,
            FilePath: req.file.path,
            FileType: req.file.mimetype
        });

        await record.save();
        res.json(record);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllDocuments = async (req, res) => {
    try {
        const data = await Document.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getByEmployee = async (req, res) => {
    try {
        const data = await Document.find({ Employeeid: req.params.empid });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteDocument = async (req, res) => {
    try {
        await Document.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
