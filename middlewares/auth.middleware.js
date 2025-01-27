const { verify_token } = require("../utils/token");

module.exports = {
    authentication: (req, res, next) => {
        try {
            const authorization = req.headers["authorization"] || req.headers["Authorization"];
            if (!authorization || !authorization?.startsWith("Bearer ")) {
                return res.status(401).json({
                    file: "auth.middleware.js",
                    message: "UNAUTHORIZED: Missing or invalid authorization header"
                });
            }

            const accessToken = authorization?.replace("Bearer ", "");
            const verifyAccessToken = verify_token(accessToken);

            if (!verifyAccessToken.success) {
                if (verifyAccessToken.expired) {
                    return res.status(410).json({
                        file: "auth.middleware.js",
                        message: "UNAUTHORIZED: Token expired",
                    });
                } else {
                    return res.status(401).json({
                        file: "auth.middleware.js",
                        message: "UNAUTHORIZED: Invalid token",
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