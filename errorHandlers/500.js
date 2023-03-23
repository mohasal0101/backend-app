'use strict';


const serverError = (err, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        message: "Server Error"
    });
}

module.exports = serverError;
