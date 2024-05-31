import express from "express"
export const router=express.Router();

import { User } from "./schema/User.js";

router.get('/user',async(req,res)=>{
    try{
        console.log("read user")
     const data= await User.find({})
     console.log(data)
      res.status(200).json(data)
    }catch(err){
        res.status().json(500).json({message:data.message})
    }
})
router.post('/createUser', async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).send({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Error creating user', error });
    }
});
