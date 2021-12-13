const { json } = require('sequelize/types');
const Product = require('../models/product');

const addProduct = (req,res) =>{
    let cartItem= req.body.cartItem;
    let productName= req.body.productName;
    let isVaraiant= req.body.isVaraiant;
    let variantType= req.body.variantType;
    let status= req.body.status;
    let tax= req.body.tax;
    let discountType= req.body.discountType;
    let discountAmount= req.body.discountAmount;
    let discountCondition= req.body.discountCondition;
    let displayAssets = req.body.displayAssets;
    let description= req.body.description;
    let tabs= req.body.tabs;

    const product = {
        cartItem: cartItem,
        productName: productName,
        isVaraiant:isVaraiant,
        variantType: variantType,
        status :  status,
        tax : tax,
        discountType : discountType,
        discountAmount : discountAmount,
        discountCondition :  discountCondition,
        displayAssets :  displayAssets,
        description :  description,
        tabs :  tabs
    }
    Product.create(product)
    .then(()=>{
        res.status(201).json({message: 'Product Added'})
    }).catch(err=>{
        res.status(403).json(err);
    })

}

const deleteProduct= (req,res) =>{
    const id = req.param.id;
    Product.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: "product Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const displayAllProduct = (req,res)=>{
    Product.findAll()
    .then(data=>{
        res.status(201).json(data);
    }).catch(err=>{
        res.status(500).json({message:'Error occured while retrieving details'})
    })
}

const updateProduct = (req,res)=> {
    const id = req.param.id;
    Product.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating product'})
    })
}

const getProductDetail = (req,res)=>{
    const id = req.param.id;
    Product.findbyPk(id)
    .then(data=>{
        if(data){
            res.send(data).status(201);
        }else{
            res.status(404).json({message:'Product not found'})
        }
    }).catch(err=>{
        res.status(500).json({message:'Error occured while retrieving details'})
    })
}
module.exports={ 
    addProduct, 
    deleteProduct, 
    displayAllProduct,
    getProductDetail,
    updateProduct
};