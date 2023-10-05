const products = require('./productmodule')

module.exports={
    listOfproducts
}

async function listOfproducts(req,res){
    const { offset = 0 , limit=25} = req.query;
    let data = await products.productlist({
        offset:parseInt(req.query.offset),
        limit:parseInt(req.query.limit)
    })
    let resources = {}
    resources.resources = data;
    resources.previous={
        page:parseInt(req.query.offset) - 1,
        limit:limit
    }
    resources.next={
        offset:parseInt(req.query.offset) + 1,
        limit:limit
    }
    res.json(resources)

}