const { create_token } = require("../utils/token");

module.exports = {
    login: (req, res) => {
        try {
            const data = req.body;
            if (!data?.payload || !data?.time) return res.status(400).json({
                success: false,
                message: "Missing data!"
            });

            const accessToken = create_token(data.payload, data.time);
            const refreshToken = create_token({}, "7d");

            return res.status(200).json({
                accessToken,
                refreshToken
            });
        }
        catch(error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}