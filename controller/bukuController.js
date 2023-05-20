
const {Book} = require("../models")
const allBuku= async(req,res)=>{
    try {
        const data = await Book.findAll()
        const result={
            status:"ok",
            data:data
        }
        res.json(result)
        
    } catch (error) {
        console.log(error,"eror data")
    }
}

// hit data berdasarkan id
const bukuByid= async (req,res)=>{
    try {
        const {id}=req.params
        const data=await Book.findByPk(id)
        const result={
            status:"ok",
            data:data
        }
        if (data===null) {
            return res.status(404).json({
                status:"failed",
                message:"data not found"
            })
        }
        res.json(result)
        
    } catch (error) {
        console.log(error,  `erorr`)
    }
}
// add buku
const addBuku= async (req,res)=>{
    try {
        const {judul,penerbit}=req.body
        const newBuku=await Book.create({judul:judul,penerbit:penerbit})
        res.status(201).json({
            status:"ok",
            message:"success di tambah",
            data: {
                id: newBuku.id,
                judul: newBuku.judul,
                penerbit: newBuku.penerbit,
                createdAt: newBuku.createdAt,
                updateAt: newBuku.updateAt,
            }
        })
    } catch (error) {
       console.log(error) 
    }
}
module.exports={allBuku,bukuByid,addBuku}