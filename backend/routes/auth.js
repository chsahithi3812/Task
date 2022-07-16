const router=require('express').Router()
const { response } = require('express')
const model=require('../model/user')

router.post('/add',(req,res)=>{
  const newUser=new model({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    hobbies:req.body.hobbies
  })
   newUser.save().then((user)=>{
    console.log('user added');
    res.json({user})
  }).catch((err)=>{
    console.log(err)
  })

})
router.get('/',(req,res)=>{
    model.find().then((frnds)=>{
    res.json(frnds)
    })
})
router.get('/:id',async (req,res)=>{
    const id=req.params.id
    await model.findById(id).then((user)=>{
        console.log(user);
        res.json(user)
    }).catch((err)=>{
       console.log(err)
    })
})
router.put('/edit/:id',async(req,res)=>{
    const id=req.params.id
    await model.findByIdAndUpdate(req.params.id,req.body).then((user)=>{
        console.log(user);
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
})
router.delete('/:id',async(req,res)=>{
    const id=req.params.id
    await model.findByIdAndDelete(id).then(()=>{
        console.log("User deleted successfully");
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=router