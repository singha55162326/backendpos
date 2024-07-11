var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET_KEY;
const { DATA_NULL, TOKEN_VALIID } = require('./config/errorCode');
const { MS_DATA_NULL, MS_TOKEN_VALIID } = require('./config/message');
module.exports = {
    checkToken: (req, res, next) => {
        let tokenInput = req.get("authorization");

        if (!tokenInput) {
            return res.status(402).send({
                status: false,
                responseCode: DATA_NULL,
                message: MS_DATA_NULL
            });
        }
        const token = tokenInput.split(' ')[1]
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            console.log('decoded:', decoded)
            if (err) {
                return res.status(500).send({
                    status: false,
                    responseCode: TOKEN_VALIID,
                    message: MS_TOKEN_VALIID
                });
            }
            next();
        });
    }
}
