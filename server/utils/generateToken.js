const jwt = require("jsonwebtoken")

function generateToken(res, id) {
    try {
        const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY)
        res.cookie("token", token, {
            httpOnly: false,        // Prevents client-side JavaScript from accessing the cookie
            secure: true,          // Ensures the cookie is sent only over HTTPS
            sameSite: "strict"  // Controls cross-site requests (use 'lax' for more flexibility)
            // maxAge: 24 * 60 * 60 * 1000
        })
    } catch (error) {
        console.log("error generating token", error.message)
    }
}

module.exports = { generateToken }