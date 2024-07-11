const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const { ERROR_BCRYPT, DATA_INVALID, SUCCESS, INPUT_NULL, ERROR, ERROR_FOUND } = require('../config/errorCode');
const { MS_ERROR_FOUND, MS_DATA_INVALID, MS_SUCCESS, MS_INPUT_NULL, MS_ERROR_BCRYPT } = require('../config/message');
exports.auth = async (req, res, next) => {
    try {
        let { username, password } = req.body;
        if (username && password) {
            let auth = new Auth(username, password);
            auth = await auth.checkAuth();
            if (auth[0].length > 0) {
                const match = await bcrypt.compare(password, auth[0][0].password);
                if (match) {
                    var token = jwt.sign({ username: auth[0][0].username, role: auth[0][0].role }, secret, { expiresIn: '3h' });
                    res.status(200).json({ auth: auth[0], token, status: true, message: MS_SUCCESS, responseCode: SUCCESS })
                } else {
                    res.json({ message: MS_ERROR_BCRYPT, responseCode: ERROR_BCRYPT, status: false });
                }
            } else {
                res.json({ message: MS_ERROR_FOUND, responseCode: ERROR_FOUND, status: false });
                return
            }
        } else {
            res.json({ message: MS_INPUT_NULL, responseCode: INPUT_NULL, status: false });
            return
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).send({ status: false, responseCode: DATA_INVALID, message: MS_DATA_INVALID });
            }
            return res.status(200).json({ decoded, status: true, message: MS_SUCCESS, responseCode: SUCCESS })
        });
    } catch (error) {
        res.json({ status: false, responseCode: ERROR, message: error })
        next(error);
    }
};

