// data dumy 
const buku=[
    {id:1,judul:"Pelangi",penerbit:"Bagus"},
    {id:2,judul:"Matahari",penerbit:"Dani"},
    {id:3,judul:"Bintang",penerbit:"danang"},
    {id:4,judul:"Bulan",penerbit:"Mulya"},
    {id:5,judul:"Planet",penerbit:"Heri"},
]
const allBuku=(req,res)=>{
    const data=buku
    const result={
        status:"ok",
        data:buku
    }
    res.json(result)
}

// hit data berdasarkan id
const bukuByid=(req,res)=>{
    const {id}=req.params
    let data
    // proses lopp data
    for (let i = 0;i < buku.length;i++) {
        // if statement id
        if (buku[i].id === Number(id)) {
            data = buku[i]
        }  
    }
    // statement jika data id tidak ada
    if (data === undefined) {
        return res.status(404).json({
            status:"failed",
            message:"data not found"
        })
    }
    // kembalikan jika data id data ada
    res.json({
        status:"ok",
        buku:data
    })
}
// add buku
const addBuku=(req,res)=>{
    const idLast=buku[buku.length - 1].id
    const newBuku=idLast +1
    var {judul,penerbit} =req.body
    const dataBuku={
        id:newBuku,
        judul:judul,
        penerbit:penerbit
    }
    buku.push(dataBuku)
    res.status(201).json({
        status:"oke",
        message:"success di tambah",
        buku:dataBuku
    })
}
module.exports={allBuku,bukuByid,addBuku,addBuku}