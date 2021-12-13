
const User = require('../models/user');

const register = (req,res) =>{
    let email= req.body.email;
    let firstName= req.body.firstName;
    let lastName= req.body.lastName;
    let phone= req.body.phone;
    let username= req.body.username;
    let password= req.body.password;
    let userType= req.body.userType;
    let dateOfBirth= req.body.dateOfBirth;
    let lastLogin= req.body.lastLogin;
    let loginLocation = req.body.loginLocation;
    let verified= req.body.verified;

    const user = {
        email: email,
        firstName: firstName,
        lastName:lastName,
        phone: phone,
        username :  username,
        password : password,
        userType : userType,
        dateOfBirth : dateOfBirth,
        lastLogin :  lastLogin,
        loginLocation :  loginLocation,
        verified :  verified
    }
    User.create(user)
    .then(()=>{
        res.status(201).json({message: 'user Added'})
    }).catch(err=>{
        res.status(403).json(err);
    })

}

const deleteUser= (req,res) =>{
    const id = req.param.id;
    User.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: "User Removed Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}


const changeEmail = (req,res)=> {
    const email = req.body.email;
    Product.update(email,{where:{email:email}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating user email'})
    })
}

const changePassword = (req,res)=> {
    const email = req.body.email;
    Product.update(email,{where:{email:email}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating user email'})
    })
}

module.exports={ 
    register,
    deleteUser,
    changeEmail,
    changePassword
};