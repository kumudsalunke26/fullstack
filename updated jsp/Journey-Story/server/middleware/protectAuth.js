const jwt = require("jsonwebtoken")
const USER = require("../models/user.js")

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(400).json({ success: false, message: "user is not authorized" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await USER.findById(decoded.id)
        if (!user || !decoded) {
            return res.status(400).json({ success: false, message: "User is not authorized" })
        }
        req.user = user
        next()

    } catch (error) {
        console.log("Error in middleware", error.message)
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}

module.exports = { protectRoute }