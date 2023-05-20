const { allBuku, bukuByid, addBuku } = require("../controller/bukuController")
const router=require("express").Router()
router.get("/buku",allBuku)
router.get("/buku/:id",bukuByid)
router.post("/buku",addBuku)

module.exports=router