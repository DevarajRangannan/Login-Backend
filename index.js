const express = require("express")
const path = require("path")
const app = express()

app.get("/",(req, res)=>{
    res.send("Hello World!!!")
})

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,"404page.html"))
})

app.listen(8080, ()=>console.log("*** Server successfully running on PORT 8080 ***"))