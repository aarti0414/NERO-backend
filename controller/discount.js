const Discount = require('../models/discount');

const addDiscount =(req,res)=>{

    let code = req.body.code;
    let type = req.body.type;
    let value = req.body.value;
    let usagecount = req.body.usagecount
    let condition = req.body.condition;
    const discount = {
        code = code,
        type = type,
        value = value,
        usagecount= usagecount,
        condition = condition
    }
    Discount.create(discount)
    .then(()=>{
        res.status(201).json({message: 'discount Added'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}
    
const removeDiscount = (req,res)=>{
    const id = req.param.id;
    Discount.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " Discount removed Successfuly"})
    }).catch(err=>{

    })
}


module.exports={
    addDiscount,
    removeDiscount
};