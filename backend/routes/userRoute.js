const express = require("express");
const router = express.Router();

// model import here
const userdata = require("../models/userModel");



// create
router.post("/", async(req,res)=>{
    const {name, email,branch, age} = req.body;
    // const userdata = require("./models/userModel");
    try {
      const userdataAdded = await userdata.create({
            name: name,
            email: email,
            branch: branch, 
            age: age,
      });
       res.status(201).json(userdataAdded);
  
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  
  });
  
  
  
  // GET
  router.get("/",async (req,res)=>{
    try {
      const alluserdatas = await userdata.find();
      res.status(200).json(alluserdatas);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
        // res.send("api running");
  
  });


//   GET single userdata
//GET SINGLE userdata
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleuserdata = await userdata.findById({ _id: id });
      res.status(200).json(singleuserdata);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });




//DELETE

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deleteduserdata = await userdata.findByIdAndDelete({ _id: id });
      res.status(201).json(deleteduserdata);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  //UPDATE

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    // console.log("get body", req.body);
    // console.log("get id", id);
    const { name, email, age } = req.body;
    try {
      const updateduserdata = await userdata.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updateduserdata);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  



  
module.exports = router;