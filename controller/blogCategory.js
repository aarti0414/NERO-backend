const BlogCategory = require('../models/blogCategory');

const addBlogCategory =(req,res)=>{

    let title = req.body.title;
    let description = req.body.description;

    const blogCategory = {
        title = title,
        description = description
    }
    BlogCategory.create(blogCategory)
    .then(()=>{
        res.status(201).json({message: 'Added blog'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const deleteBlogCategory= (req,res)=>{
    const id = req.param.id;
    BlogCategory.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " blog Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}


const editBlogCategory = (req,res)=> {
    const id = req.param.id;
    BlogCategory.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating address'})
    })
}

module.exports={
    addBlogCategory,
    deleteBlogCategory,
    editBlogCategory
};