
const empModel = require("../Models/stuModel");

const stuDataSave=async(req,res)=>{
    try{
        const {empno,email,name,pass} = req.body;
        const  empdata = empModel.create({
             empno:empno,
             email:email,
             name:name,
             pass:pass
        })
        res.status(200).send(empdata);
    }catch(error){
    res.status(404).send("MongoDB Server No Started !!!");
}
}

const stuDisplay=async(req,res)=>{
    const {empno, email,name,pass}= req.body;
    const empd = await empModel.find();
    res.status(200).send(empd)
}

const empSearch=async(req,res)=>{
     const {empno}= req.body;
    const empdata = await empModel.find({
        empno:empno
    })
    res.send(empdata)
}

const empEdit=async(req,res)=>{
       const Data = await empModel.find();
       res.send(Data);
}
const empDelete=async(req, res)=>{
    const myid= req.body.id;
    const student=await  empModel.findByIdAndDelete(myid);   
    res.send("record deleted!")
 }

 const empEditData=async(req, res)=>{
    const id=req.body.id;
    const studata= await  empModel.findById(id);
    res.send(studata);
}

const empEditSave=async(req,res)=>{
     const {_id,empno,email, name,pass} = req.body;

     const studata = await empModel.findByIdAndUpdate(_id,{
           empno:empno,
           email:email,
           name:name,
           pass:pass

     })
     res.send("Data Succesfully Updated")
}
 

module.exports={ 
    stuDataSave,
    stuDisplay,
    empSearch,
    empEdit,
    empDelete,
    empEditData,
    empEditSave
   
}
