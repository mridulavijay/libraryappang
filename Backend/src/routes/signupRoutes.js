const express=require("express");
const signuprouter=express.Router();
const Userdata=require('../model/Userdata');
function srouter(){


signuprouter.post('/add',function(req,res){
   
  
    Userdata.find({"user":req.body.User.user},(err,resp)=>{
        if(resp.length==0){
            if(req.body.User.user=="admin")
           { var item={
                user:req.body.User.user,
                password:req.body.User.password,
               email:req.body.User.email,
                userCategory:"admin"
            }}
            else{
                var item={
                    user:req.body.User.user,
                    password:req.body.User.password,
                   email:req.body.User.email,
                    userCategory:"normaluser"
                }
            }
            var User=Userdata(item);
            User.save();

            res.send({message:""});
            
        }
        else{
            res.send({message:"User already registered.Please use different username"});
            
        }

    
    })

    })
    

return signuprouter;
}
module.exports=srouter;