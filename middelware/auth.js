const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
    try {
        // header format: Authorization: Bearer TOKEN
        const t = req.headers.authorization?.split(" ")[1];

        if (!t) return res.sendStatus(401);

        req.user = jwt.verify(t, process.env.JWT_TOKEN);
        next();

    } catch (err) {
        res.sendStatus(403);
    }
};
