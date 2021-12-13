const Wishlist = require('../models/wishlist');

const addtoWishlist =(req,res)=>{

    let createdAt = req.body.createdAt;
    let description = req.body.description;

    const wishlist = {
        createdAt = createdAt
    }
    Wishlist.create(wishlist)
    .then(()=>{
        res.status(201).json({message: 'Added  to wishlist'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const deleteWishlist= (req,res)=>{
    const id = req.param.id;
    Wishlist.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " wishlist Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}


const updatewishlist = (req,res)=> {
    const id = req.param.id;
    Wishlist.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating wishlist'})
    })
}

module.exports={
    addtoWishlist,
    deleteWishlist,
    updatewishlist
};