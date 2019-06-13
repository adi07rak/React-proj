const express = require ("express");
const app = express();
const cors = require("cors");
const mongoose = require ("mongoose");
const winston = require("winston");
const config = require ("config");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

winston.add( new winston.transports.File({filename:"./log/logfile.log"}));


const db_connect = "mongodb://localhost:27017/post";
mongoose.connect(db_connect,{useNewUrlParser:true})
.then(()=>{
    winston.log("info","Database connected!!");
})
.catch((ex)=>{
    winston.log("error",ex.message);
});

var Schema = mongoose.Schema;

var postSchema = new Schema({
    fname : {type:String},
    p_title : {type:String},
    p_body : {type:String},
    p_imp :[String]
    //p_u_like:{type:Boolean}
});
var postModel = mongoose.model("posts",postSchema);

app.get("/get_post",async (req,res)=>{
    
    try{
      const result = await postModel.find();
      res.status(200).send(result);
      winston.log("info","post page is initilized!!");
      
    }catch{
      res.status(403).send(ex.message);
      winston.log("error",ex.message);
    }
    
    
});

var userSchema = new Schema({
  uname : {type:String, unique:true, lowercase:true,required:true},
  password : {type:String, required:true},
  fname : {type:String, required:true},
  lname : {type:String, required:true},
  phone : {type:String, required:true},
  gen : {type:String, required:true}
});

var userModel = mongoose.model('users',userSchema);

app.post("/signup",(req,res)=>{
  //console.log(req.body);
  var um = new userModel();
  um.uname = req.body.uname;
  um.password = req.body.password;
  um.fname = req.body.fname;
  um.lname = req.body.lname;
  um.phone = req.body.phone;
  um.gen = req.body.gen;
  //console.log(um);
  um.save((err,data)=>{
    if(err){
      res.send("error");
      //console.log(err);
      
    }
    else{
      res.status(200).send(data);
    }
  })
});

app.post("/login",async (req,res)=>{
  var login = req.body;
  console.log(login);
  
  var result1 = await userModel.find({uname:login.uname,password:login.password});
  if (result1.length==1){
    var res_user = result1[0].fname;
    var token = jwt.sign({"username":res_user},'iambatman',{expiresIn : '1h'});
    res.status(200).send({
      isLoggedIn:true,
      token:token
    });
    //res.send("done");
    console.log(token);
    
    console.log("okay");
    
  }else{
    res.send({
      isLoggedIn:false,
    });
    console.log("not okay");
    
  }
}); 



app.listen(4000,()=>{
    console.log("Server is running @ : 4000");
    
})