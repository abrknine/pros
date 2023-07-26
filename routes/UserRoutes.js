
const express= require('express')
const  {getStudentData} =require('..//controller/UserController')
const Router=  express.Router();

//  route1
Router.get('/',(req,res)=>{
    res.json({
        status:"ok",
        message:"welcome"
    })
})

//   route2
Router.get('/live',(req,res)=>{

    //logic or whatever goin to happen after hitting this endpoint ( in this cASE WE ARE USING get but we can use,post delete,put)
    res.json({
        status:"ok",
        message:"we are alive!!"
    })
})

Router.get('/getdata',getStudentData)

module.exports=Router


