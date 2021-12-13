const Order = require('../models/Order');

const createOrder = (req,res) =>{
    let paymentType= req.body.paymentType;
    let total= req.body.total;
    let instruction= req.body.instruction;
    let discount= req.body.discount;
    let couponCode= req.body.couponCode;
    let authorizationCode= req.body.authorizationCode;
    let status= req.body.status;
    const order = {
        paymentType: paymentType,
        total: total,
        instruction:instruction,
        discount: discount,
        couponCode :  couponCode,
        authorizationCode : authorizationCode,
        status:status
    }
    Order.create(order)
    .then(()=>{
        res.status(201).json({message: 'Order Created'})
    }).catch(err=>{
        res.status(403).json(err);
    })

}

const deleteOrder= (req,res) =>{
    const id = req.param.id;
    Order.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: "order Deleted Successfuly"})
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

const createBillingInfo = (req,res)=>{
    const id = req.param.id;
    Order.findbyPk(id)
    .then(data=>{
        if(data){
            res.send(data).status(201);
        }else{
            res.status(404).json({message:'order not found'})
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