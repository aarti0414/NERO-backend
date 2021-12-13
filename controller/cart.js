const Cart = require('../models/cart');

const addToCart =(req,res)=>{

    let cartItem= req.body.cartItem;
    let cartTotal = req.body.cartTotal;
    const cart = {
        cartItem= cartItem,
        cartTotal = cartTotal
    }
    Cart.create(cart)
    .then(()=>{
        res.status(201).json({message: 'Added to cart'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const removeCartItem = (req,res)=>{
    const id = req.param.id;
    Cart.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " Cart item Deleted Successfuly"})
    }).catch(err=>{

    })
}

const viewCart = (req,res)=>{
    const id = req.param.id;
    Cart.findAll({where : {id : id}})
    .then(data=>{
        res.send(data).status(201);
    }).catch(err=>{
        res.status(500).json({message:'Error occured while retrieving details'})
    })
}



module.exports={
    addToCart,removeCartItem,viewCart
};