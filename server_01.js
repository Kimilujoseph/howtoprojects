const fs = require('fs').promises
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/products',listProducts)

app.listen(port,()=>console.log(`The por is listening on port ${port}`))


async function listProducts(req,res){
    const productFIle = path.join(__dirname,'./product.json')
    try{
        const data = await fs.readFile(productFIle)
        res.json(JSON.parse(data))
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}