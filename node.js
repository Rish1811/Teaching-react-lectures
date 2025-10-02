
const express=require("express");
const app=express();
const PORT=5000;

//fack database
const students=[
    {id:1,name:"pooja",age:'18'},
    {id:2,name:"prince",age:'18'},
    {id:3,name:"radhika",age:'18'},
    {id:4,name:"rishi",age:'18'},
];
//api for landing page 
app.get("/",(req,res)=>{
    res.send("Welcome To my first API!");
});
//api for show students data
app.get("/students",(req,res)=>{
    res.json(students);
});
//api for get each data by using id
app.get("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const student=students.find(s=> s.id == id);
   
      if(student){
        res.json(student);
      }else{
        res.status(404).json({message:"Student not found" });
      }
})


app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});

