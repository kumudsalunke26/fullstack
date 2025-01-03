// const jwt = require("jsonwebtoken")
// const USER = require("../models/user.js")

// const protectRoute = async (req, res, next) => {
//     try {
//         const token = req.cookies.token

//         if (!token) {
//             return res.status(400).json({ success: false, message: "user is not authorized" })
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
//         const user = await USER.findById(decoded.id)
//         if (!user || !decoded) {
//             return res.status(400).json({ success: false, message: "User is not authorized" })
//         }
//         req.user = user
//         next()

//     } 
//     catch (error) {
//         console.log("Error in middleware", error.message)
//         return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
//     }
// }

// module.exports = { protectRoute }   




const jwt = require("jsonwebtoken");
const USER = require("../models/user.js");

const protectRoute = async (req, res, next) => {
    try {
        // Retrieve the token from cookies
        const token = req.cookies.token;

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ success: false, message: "User is not authorized. Token not found." });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Find the user in the database
        const user = await USER.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ success: false, message: "User is not authorized. User not found." });
        }

        // Attach the user to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        return res.status(401).json({ success: false, message: "Invalid token or user authorization failed." });
    }
};

module.exports = { protectRoute };
