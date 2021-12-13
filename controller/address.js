const Address = require('../models/address');

const addAddress =(req,res)=>{

    let nickName = req.body.nickName;
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let line1 = req.body.line1;
    let line2 = req.body.line2;
    let landmark = req.body.landmark;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let zipcode = req.body.zipcode;

    const address = {
        nickName = nickName,
        name = name,
        email=email,
        phone= phone,
        line1 = line1,
        line2 = line2,
        landmark = landmark,
        city = city, 
        state = state,
        country = country, 
        zipcode = zipcode
    }
    Address.create(address)
    .then(()=>{
        res.status(201).json({message: 'Added address'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const deleteAddress= (req,res)=>{
    const id = req.param.id;
    Address.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " address Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}


const editAddress = (req,res)=> {
    const id = req.param.id;
    Address.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating address'})
    })
}

module.exports={
    addAddress,
    deleteAddress,
    editAddress
};