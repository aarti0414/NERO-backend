const Notification = require('../models/notification');

const addNotification =(req,res)=>{

    let title = req.body.title;
    let read = req.body.read;
    let description = req.body.description;

    const notification = {
        title = title,
        read =  read,
        description = description
    }
    Notification.create(notification)
    .then(()=>{
        res.status(201).json({message: 'notification review'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const deleteNotification= (req,res)=>{
    const id = req.param.id;
    Notification.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " notification Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

module.exports={
    addNotification,
    deleteNotification
};