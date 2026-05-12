const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
    res.send(users);
  });
// GET by specific ID request: Retrieve a single user with email ID

router.get("/:email",(req,res)=>{
    const email = req.params.email;
    let filtered = users.filter((user)=>user.email===email);
    res.send(filtered);
})

// POST request: Create a new user
router.post('/',(req,res)=>{
    let user = {
        "firstName": req.query.firstName,
        "lastName": req.query.lastName,
        "email": req.query.email,
        "DOB": req.query.DOB
    };
    users.push(user);
    res.send(user[firstName]+" has been added");
})


// PUT request: Update the details of a user by email ID
router.put("/email",(req,res)=>{
    const email = req.params.email;

    let filtered = users.filter((user)=>user.email===email);

    if(filtered.lenght>0){
        let filtered_user = filtered_users[0];
        // first matching user
        let DOB = req.query.DOB;
        if(DOB){
            filtered.DOB=DOB;
        }


        users = users.filter((user)=>user.email!=email);
        users.push(filtered);
        res.send(`User with email ${email} updated DOB`);
    }
    else{
        res.send("Unable to find out");
    }
})

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
