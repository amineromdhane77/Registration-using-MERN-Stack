const express=require('express')
const cors =require('cors')
const mongoose=require('mongoose')
const bcryptjs =require('bcryptjs')
 
const app=express()
app.use(cors())
app.use(express.json())

app.listen(5000,()=>{
    console.log('hey min')
})
mongoose.connect('mongodb+srv://amineromdhane77:aminejiji@cluster0.ogyqxbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('hey youuuuuuuuuuu')
})
.catch(()=>{
console.log('errr')
})
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
const User=mongoose.model('user',userSchema)
app.post('/register',async(req,res)=>{
   try {
    const hassbcrypt=await bcryptjs.hashSync(req.body.password)
    const {name,email,password}=req.body
    const newUser=await User.create({name:req.body.name,email:req.body.email,password: hassbcrypt})
    const saveUser=await newUser.save()
    res.status(200).json(saveUser)
   } catch (error) {
    console.error('Error to create user',error)
    res.status(500).json({error:'server error'})
   }

})