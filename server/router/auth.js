const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../model/userSchema');

router.post('/', (req, res) =>{
    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "Plz fill all the field"});
    }

    User.findOne({email: email})
        .then((userExist) => {
            if(userExist) {
                return res.status(422).json({ error: "emil already exist"});
            } else if(password!=cpassword){
                return res.status(422).json({error: "Password are not match"});
            }

            const user = new User({name, email, phone, work, password, cpassword});
            
            user.save().then(() => {
                res.status(201).json({message: "user registration successful"});
            }).catch((err) => res.status(500).json({error: "Failed to registration"}));
        }).catch(err => { console.log(err); })

});

module.exports = router;