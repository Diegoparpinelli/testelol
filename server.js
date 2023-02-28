<<<<<<< HEAD
const express = require("express")
const cors = require("cors")

const app = express()


app.use(express.json());
app.use(cors({origin:"0.0.0.0"}))

app.use("/", require("./routes/router"));

=======
const express = require("express")
const cors = require("cors")

const app = express()


app.use(express.json());
app.use(cors({origin:"0.0.0.0"}))

app.use("/", require("./routes/router"));

>>>>>>> aef977a0048d49c26753232930131d7953035849
app.listen(3005, ()=>console.log("sever is runing in port 3005"));