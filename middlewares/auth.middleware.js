const { verify_token } = require("../utils/token");

module.exports = {
    authentication: (req, res, next) => {
        try {
            const authorization = req.headers["authorization"] || req.headers["Authorization"];
            if (!authorization || !authorization?.startsWith("Bearer ")) {
                return res.status(401).json({
                    success: false,
                    message: "Chưa xác thực: Thiếu hoặc authorization headers không đúng định dạng!"
                });
            }

            const accessToken = authorization?.replace("Bearer ", "");
            const verifyAccessToken = verify_token(accessToken);

            if (!verifyAccessToken.success) {
                if (verifyAccessToken.expired) {
                    return res.status(410).json({
                        success: false,
                        message: "Chưa xác thực: access token hết hạn!"
                    });
                } else {
                    return res.status(401).json({
                        success: false,
                        message: "Chưa xác thực: access token không đúng định dạng!",
                    });
                }
            }
    
            req.userInfo = verifyAccessToken.verify; 
            next();
        }
        catch(error) {
            return res.status(500).json({
                message: error.message
            })
        }
    } 
}