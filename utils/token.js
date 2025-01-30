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
    },
    verify_token: (token) => {
        try {
            const verify = jwt.verify(
                token,
                TOKEN_KEY,
            );

            return {
                success: true,
                verify
            };
        }
        catch(error) {
            if (error.name === 'TokenExpiredError') {
                return {
                    success: false,
                    expired: true,
                    message: 'Token has expired',
                };
            }
            return {
                success: false,
                expired: false,
                message: error.message,
            };
        }
    }
}