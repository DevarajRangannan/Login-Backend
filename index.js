const express = require("express")

const app = express()

app.get("/",(req, res)=>{
    res.send("Hello World!!!")
})

app.use((req, res)=>{
    res.status(404).send("Page not found")
})

app.listen(8080, ()=>console.log("*** Server successfully running on PORT 8080 ***"))