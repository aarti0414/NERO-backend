const Plan = require('../models/plan');

//create a plan
 const createPlan = (req,res)=>{
    //validations

    let name= req.body.name;
    let accessCondition= req.body.accessCondition;
    let duration= req.body.duration;
    let cost= req.body.cost;
    const plan={
        name:name,
        accessCondition : accessCondition,
        duration:duration,
        cost:cost
    }
   Plan.createPlan(plan)
    .then(()=>{
       res.status(201).json({message: 'Successfully new plan created'})
    }).catch(err=>{
        res.status(403).json(err);
    })
}

const removePlan= (req,res)=>{

}
module.exports= createPlan;