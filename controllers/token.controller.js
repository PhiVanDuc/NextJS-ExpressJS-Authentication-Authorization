const { create_token, verify_token } = require("../utils/token");

module.exports = {
    login: (req, res) => {
        try {
            const data = req.body;
            if (!data?.payload || !data?.time) {
                return res.status(400).json({
                    file: "token.controller.js",
                    success: false,
                    message: "Missing data!"
                });
            }

            const accessToken = create_token(data.payload, data.time);
            const refreshToken = create_token({}, "7d");

            return res.status(200).json({
                accessToken,
                refreshToken
            });
        }
        catch(error) {
            return res.status(500).json({
                file: "token.controller.js",
                success: false,
                message: error.message,
            });
        }
    },

    refresh_access_token: async (req, res) => {
        try {
            const data = req.body;
            if (!data?.payload || !data?.time) {
                return res.status(400).json({
                    file: "token.controller.js",
                    message: "Missing data!"
                });
            }

            const resfreshToken = req?.cookies?.refreshToken;
            if (!resfreshToken || (!verify_token(resfreshToken).success && !verify_token(resfreshToken).expired)) {
                return res.status(401).json({
                    file: "token.controller.js",
                    message: "Your sign in session is expired!"
                })
            }

            const accessToken = create_token(data.payload, data.time);
            return res.status(200).json({
                accessToken
            });
        }
        catch(error) {
            return res.status(500).json({
                file: "token.controller.js",
                message: error.message,
            });
        }
    }
}