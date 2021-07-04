const express=require("express");
const app=express();
const multer=require('multer');
const path=require('path');
const cors=require('cors');
const jwt=require('jsonwebtoken');
app.use(express.json());
app.use(cors());
//app.set('view engine','ejs');
//app.set('views',__dirname+"/src/views");
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
const PORT=process.env.PORT||3000;
const Userdata=require('./src/model/Userdata');

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }



//const booksrouter=require("./src/routes/bookRoutes")(navu)
const userrouter=require("./src/routes/userRoutes")()
const adminrouter=require("./src/routes/adminRoutes")(verifyToken)
//const authorsrouter=require("./src/routes/authorRoutes")(navu)
//const loginrouter=require("./src/routes/loginRoutes")()
const signuprouter=require("./src/routes/signupRoutes")()
//const addbookrouter=require("./src/routes/addbookRoutes")(nava)
//const addauthorrouter=require("./src/routes/addauthorRoutes")(nava)

app.use('/userhome',userrouter);
app.use('/adminhome',adminrouter);
app.use('/userhome/books',userrouter);
app.use('/userhome/authors',userrouter);
//app.use('/login',loginrouter);
//app.use('/login/add',loginrouter);
app.use('/signup',signuprouter);
app.use('/signup/add',signuprouter);
app.use('/adminhome/addbook',adminrouter);
app.use('/adminhome/addbook/add',adminrouter);
app.use('/adminhome/addauthor',adminrouter);
app.use('/adminhome/addauthor/add',adminrouter);
app.use('/adminhome/adauthors',adminrouter);
app.use('/adminhome/adbooks',adminrouter);
app.use('/adminhome/adbooks/bupdate',adminrouter);
app.use('/adminhome/adauthors/aupdate',adminrouter);


app.post('/login',function(req,res){
   
  
    Userdata.find({"user":req.body.username},(err,resp)=>{
       
        if(resp.length==0){
            res.status(401).send("User not registered!! Please sign up");
        }
        
        else{
            if(resp[0].password===req.body.password){
            let payload = {subject:req.body.username+req.body.password }
            let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({tok:token,usercategory:resp[0].userCategory});
                
            }
            else{
                res.status(401).send("Invalid Credentials!!Password and Username do not match");
            }
            
        }

    
    })

    })



app.listen(3000);
//app.listen(PORT,()=>{console.log("Server ready at"+PORT)});