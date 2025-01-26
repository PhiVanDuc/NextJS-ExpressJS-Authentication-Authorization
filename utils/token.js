const jwt = require("jsonwebtoken");

const TOKEN_KEY = process.env.TOKEN_KEY;

module.exports = {
    create_token: (payload, time) => {
        return jwt.sign(
            payload,
            TOKEN_KEY,
            {
                expiresIn: time
            }
        )
    }
}