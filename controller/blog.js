const Blog = require('../models/blog');

const addBlog =(req,res)=>{

    let title = req.body.title;
    let type = req.body.type;
    // let createdOn = req.body.createdOn;
    // let createdBy = req.body.createdBy;
    // let description = req.body.description;
    let content= req.body.content;

    const blog = {
        title : title,
        type : type,
        // createdOn=createdOn,
        // createdBy= createdBy,
        // description = description,
        content : content
    }
    Blog.create(blog)
    .then(()=>{
        
        res.render('welcome.hbs');

    }).catch(err=>{
        res.status(403).json(err);
    })
}
const getAllBlog=async(req,res)=>{
    await Blog.findAll().then(blogs=>{
        res.render('edit-blog.hbs');console.log(JSON.stringify(blogs));
    }

    ).catch(err=>console.log);
}

const deleteBlog= (req,res)=>{
    const id = req.param.id;
    Blog.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " blog Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}


const editBlog = (req,res)=> {
    const id = req.param.id;
    Blog.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating blog'})
    })
}

module.exports={
    addBlog,
    getAllBlog,
    deleteBlog,
    editBlog
};