const Variant = require('../models/variant');

const addVariant =(req,res)=>{

    let status= req.body.status;
    let variantName = req.body.variantName;
    let price = req.body.price;
    let quantityInStock = req.body.quantityInStock;
    let productDimensions = req.body.productDimensions;
    let dimensionMetric = req.body.dimensionMetric;
    const variant = {
        status= status,
        variantName = variantName,
        price=price,
        quantityInStock= quantityInStock,
        productDimensions = productDimensions,
        dimensionMetric = dimensionMetric
    }
    Variant.create(variant)
    .then(()=>{
        res.status(201).json({message: 'Added a new Variant'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const removeVariant= (req,res)=>{
    const id = req.param.id;
    Variant.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " Variant Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const getVariantDetails = (req,res)=>{
    const id = req.param.id;
    Variant.findAll({where : {id : id}})
    .then(data=>{
        res.send(data).status(201);
    }).catch(err=>{
        res.status(500).json({message:'Error occured while retrieving details'})
    })
}


const updateVariant = (req,res)=> {
    const id = req.param.id;
    Variant.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating Variant'})
    })
}

module.exports={
    addVariant,
    removeVariant,
    getVariantDetails,
    updateVariant
};