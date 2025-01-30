const { create_token, verify_token } = require("../utils/token");

module.exports = {
    signIn: (req, res) => {
        try {
            const data = req.body;
            if (!data?.payload || !data?.time) {
                return res.status(400).json({
                    success: false,
                    message: "Thiếu dữ liệu truyền lên!"
                });
            }

            const accessToken = create_token(data.payload, data.time);
            const refreshToken = create_token({}, "1h");

            return res.status(200).json({
                success: true,
                message: "Đăng nhập thành công!",
                data: { accessToken, refreshToken }
            });
        }
        catch(error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    refresh: async (req, res) => {
        try {
            const data = req.body;
            if (!data?.payload || !data?.time) {
                return res.status(400).json({
                    success: false,
                    message: "Thiếu dữ liệu truyền lên!"
                });
            }

            const resfreshToken = data?.refreshToken;
            if (!resfreshToken || !verify_token(resfreshToken).success) {
                return res.status(401).json({
                    success: false,
                    message: "Chưa xác thực: Phiên đăng nhập đã hết hạn!"
                })
            }

            const accessToken = create_token(data.payload, data.time);
            const refreshToken = create_token({}, "7d");

            return res.status(200).json({
                success: true,
                message: "Đã thành công cấp lại tokens mới!",
                data: { accessToken, refreshToken }
            });
        }
        catch(error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}