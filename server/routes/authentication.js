const router = require("express").Router()
const authenticationController = require("../controllers/authenticationController")

router.post("/signup", authenticationController.create)
router.post("/login", authenticationController.login)
router.delete("/delete", authenticationController.destroy)

module.exports = router
