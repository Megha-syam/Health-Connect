const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

mongoose.connect('mongodb+srv://saipraneethkambhampati800:PFTyvSKltwa4wBFB@cluster0.w2azzd2.mongodb.net/hospital_management')
.then(()=>{
    console.log("mongodb conncted")
})
.catch(()=>{
    console.log("failed to connect")
})

const app = express();
const defaultSessionSecret = 'healthconnect';

app.use(session({
  secret: defaultSessionSecret,
  resave: false,
  saveUninitialized: true
}));


// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// Define a schema for the user data
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  mobileNumber: String,
  dob: String,
});

const User = mongoose.model('User', userSchema);


app.get('/api/user', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});


// Define a route to handle form submissions
app.post('/api/signup', async (req, res) => {
  if(req.session.user){
    res.json({ message: 'Already logged in successful','user':req.session.user });//how to navigate it to user dashboard
  }
  else{
    const userData = req.body;
    const user = new User(userData);
    try {
      const savedUser = await user.save();
      console.log('User data saved:', savedUser);
      res.status(200).json({ message: 'Registered successful','user' : user });
    } catch (err) {
      console.error('Error saving user data:', err);
      res.status(500).send('Internal Server Error');
    }
  }
  });

// Define a route to handle login requests
app.post('/api/login', async (req, res) => {
   if(req.session.user){
    res.json({ message: 'Already logged in successful','user':req.session.user });//how to navigate it to user dashboard
   }
  else{
    const { username, password } = req.body;
    try {
      const user = await User.find({ username:username, password:password });
      console.log(user)
      if (user) {
        req.session.user = user
        console.log(req.session.user);
        // User authenticated
        res.status(200).json(user); // Send a JSON response with additional information
      } else {
        // Authentication failed
        res.status(401).json({ message: 'Login failed' }); // Send a JSON response with a message
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Send a JSON response with an error message
    }}
  });


  app.get("/api/logout", async (req, res) => {
    if(req.session.user){

    try{
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
        } else {
          res.status(200).json({ message: 'Logged out successfully' }); // Send a JSON response with a message
        }
    });
    }
    catch(error){
        console.log(error);
        res.status(401).json({ message: 'internal error' });
    }
  }
});
// End of Teams Route Handling Functions

app.listen(5000, function () {
    console.log('Server started at port 5000');
   })