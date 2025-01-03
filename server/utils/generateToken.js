// const jwt = require("jsonwebtoken")

// function generateToken(res, id) {
//     try {
//         const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY)
//         res.cookie("token", token, {
//             httpOnly: false,        // Prevents client-side JavaScript from accessing the cookie
//             secure: true,          // Ensures the cookie is sent only over HTTPS
//             sameSite: "strict"  // Controls cross-site requests (use 'lax' for more flexibility)
//             // maxAge: 24 * 60 * 60 * 1000
//         })
//     } catch (error) {
//         console.log("error generating token", error.message)
//     }
// }

// module.exports = { generateToken }




const jwt = require("jsonwebtoken");

function generateToken(res, id) {
    try {
        const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY); 

        res.cookie("token", token, {
            httpOnly: true,        // Prevent client-side JS access
            secure: process.env.NODE_ENV === "production", // Use HTTPS only in production
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // Flexibility in development
            maxAge: 24 * 60 * 60 * 1000 // Cookie valid for 1 day
        });
    } catch (error) {
        console.log("Error generating token:", error.message);
    }
}

module.exports = { generateToken };
