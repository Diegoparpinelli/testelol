const {Router, static} = require("express")


const router = Router()


//API endpoints
router.use("/testelol", require("./testelol.js"))


module.exports = router