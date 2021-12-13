const Comment = require('../models/comment');

const addComment =(req,res)=>{

    let commentBody = req.body.commentBody;
    let dateOfComment = req.body.dateOfComment;

    const comment = {
        commentBody = commentBody,
        dateOfComment = dateOfComment
    }
    Comment.create(comment)
    .then(()=>{
        res.status(201).json({message: 'commented'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const deleteComment= (req,res)=>{
    const id = req.param.id;
    Comment.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " comment Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const editComment = (req,res)=> {
    const id = req.param.id;
    Comment.update(req.body,{where:{id:id}})
    .then(data => {
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while editing comment'})
    })
}

module.exports={
    addComment,
    deleteComment,
    editComment
};