const BillInfo = require('../models/billingInfo');

const addCard =(req,res)=>{

    let cardNumber= req.body.cardNumber;
    let expDate = req.body.expDate;
    let cvv = req.body.cvv;
    let authoriazationCode = req.body.authoriazationCode
    let name = req.body.name;
    const billInfo = {
        cardNumber= cardNumber,
        expDate = expDate,
        cvv = cvv,
        authoriazationCode= authoriazationCode,
        name = name
    }
    BillInfo.create(billInfo)
    .then(()=>{
        res.status(201).json({message: 'card Added'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}
    
const removeCard = (req,res)=>{
    const id = req.param.id;
    BillInfo.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " Card Deleted Successfuly"})
    }).catch(err=>{

    })
}


module.exports={
    addCard,
    removeCard
};