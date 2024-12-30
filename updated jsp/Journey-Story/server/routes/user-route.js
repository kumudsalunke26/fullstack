const express = require("express")
const { signup, login, logout ,checkAuth} = require("../controllers/user-controllers")
const { protectRoute } = require("../middleware/protectAuth")


const router = express.Router()
router.get("/checkAuth", protectRoute, checkAuth)
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

module.exports = router