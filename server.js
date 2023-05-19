const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const port=4000
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/",(reqq,res)=>{
    res.json("MVC Rest API CRUD")
})
app.listen(port,(req,res)=>console.log("server ready"))