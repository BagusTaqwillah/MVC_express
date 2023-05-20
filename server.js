// inisalisasi express
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const port=4000
const routerBuku=require("./routes/buku")

// inisialisasi response json
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(routerBuku)
// routing express
app.get("/",(req,res)=>{
    res.json({
        message:"MVC rest API express"
    })
})
// running express app
app.listen(port,(req,res)=>console.log("server ready"))