const express = require("express")
const cors = require("cors")

const app = express()


app.use(express.json());
app.use(cors({origin:"0.0.0.0"}))

app.use("/", require("./routes/router"));

app.listen(3005, ()=>console.log("sever is runing in port 3005"));