var express=require('express');
const app=express();
var mongoose=require('mongoose');
var User=require('./users1');
mongoose.connect('mongodb+srv://myData:ynzHxrU4i0dCKsH0@cluster0.njz111h.mongodb.net/myFolder?retryWrites=true&w=majority',
  {useNewUrlParser:true},
  {useUnifiedTopology:true}
).then(()=>{
      console.log('db connection done')
});
User.find({},function(err,data){
   if(err)
   {
      console.log(err);
   }
   else    
   {
     console.log(data);
   }
})
const info=new User({
   _id:new mongoose.Types.ObjectId(),
   name:'Rohan',
   email:'Rohan321@gmail.com',
   address:'Nai Bazar',
})
info.save().then((res)=>{
   console.log(res);
}).catch((err)=>console.log(err))
