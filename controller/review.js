const Review = require('../models/review');

const addReview =(req,res)=>{

    let rating = req.body.rating;
    let heading = req.body.heading;
    let body = req.body.body;

    const review = {
        rating = rating,
        heading =  heading,
        body = body
    }
    Review.create(review)
    .then(()=>{
        res.status(201).json({message: 'Added review'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const deleteReview= (req,res)=>{
    const id = req.param.id;
    Review.destroy({where:{id : id}})
    .then(()=>{
        return res.status(204).json({ success: true, message: " review Deleted Successfuly"})
    }).catch(err=>{
        res.status(403).json(err);
    })
}


const updateReview = (req,res)=> {
    const id = req.param.id;
    Review.update(req.body,{where:{id:id}})
    .then(data=>{
        res.send(data).status(201)
    }).catch(err=>{
        res.status(500).json({message:'Error while updating review'})
    })
}

module.exports={
    addReview,
    deleteReview,
    updateReview
};