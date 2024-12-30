const USER = require("../models/user")
const bcrptjs = require("bcryptjs")
const { generateToken } = require("../utils/generateToken")


const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        if (!fullName) {
            return res.status(400).json({ success: false, message: "fullName is required" })
        }
        if (!email) {
            return res.status(400).json({ success: false, message: "email is required" })
        }
        if (!password) {
            return res.status(400).json({ success: false, message: "password is required" })
        }

        const user = await USER.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, message: "user already exits" })
        }

        const hashPassword = await bcrptjs.hash(password, 10)

        const newUser = new USER({
            fullName,
            email,
            password: hashPassword,
        });
        await newUser.save()
        if (newUser) {
            generateToken(res, newUser._id)

            return res.status(201).json({
                success: true, message: "user is registered successfull", user: {
                    ...newUser._doc,
                    password: undefined
                }
            })
        }

    } catch (error) {
        console.log("Error while signup", error.message)
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
            return res.status(400).json({ success: false, message: "email is required" })
        }
        if (!password) {
            return res.status(400).json({ success: false, message: "password is password" })
        }

        const user = await USER.findOne({ email })
        const isPassMatched = await bcrptjs.compare(password, user.password)
        if (!user || !isPassMatched) {
            return res.status(400).json({ success: false, message: "Invalid credentials" })
        }
        generateToken(res, user._id)
        return res.status(200).json({
            success: true, message: "user is login successfully", user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log("Error while login", error.message)
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}



const logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ success: true, message: "user logout successfully" })
    } catch (error) {
        console.log("Error while logout", error.message)
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}


const checkAuth = async (req, res) => {
    try {
        const user = req.user
        if (!user) {
            return res.status(400).json({ success: false, message: "User is Unauthorized" })
        }
        return res.status(200).json({
            success: true, message: "User is Authorized", user: {
                ...user._doc,
                password: undefined
            }
        })
    }
    catch (error) {
        console.log("Error while checking auth", error.message)
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}



module.exports = {
    signup,
    login,
    logout,
    checkAuth
}