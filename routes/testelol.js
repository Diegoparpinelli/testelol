const Router = require("express").Router()




Router.post("/", async (req, res)=>{
    console.log(req.body)
    res.sendStatus(201)
})

module.exports = Router