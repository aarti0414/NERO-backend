const Category = require('../models/category');

const createCategory =(req,res)=>{

    let title = req.body.title;
    let description = req.body.description;

    const category = {
        title = title,
        description =  description,
    }
    Category.create(category)
    .then(()=>{
        res.status(201).json({message: 'Added category'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const deleteCategory= (req,res)=>{
    const id = req.param.id;
    Category.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " category Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}


const updatecategory = (req,res)=> {
    const id = req.param.id;
    Category.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating address'})
    })
}

module.exports={
    createCategory,
    deleteCategory,
    updatecategory
};