const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://saipraneethkambhampati800:PFTyvSKltwa4wBFB@cluster0.w2azzd2.mongodb.net/hospital_management')
.then(()=>{
    console.log("mongodb conncted")
})
.catch(()=>{
    console.log("failed to connect")
})

const app = express();

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

// Define a route to handle form submissions
app.post('/api/signup', async (req, res) => {
    const userData = req.body;
    const user = new User(userData);
  
    try {
      const savedUser = await user.save();
      console.log('User data saved:', savedUser);
      res.status(200).json({ message: 'Login successful','User' : user });
    } catch (err) {
      console.error('Error saving user data:', err);
      res.status(500).send('Internal Server Error');
    }
  });

// Define a route to handle login requests
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.find({ username:username, password:password });
      console.log(user)
      if (user) {
        // User authenticated
        res.status(200).json({ message: 'Login successful','User' : user }); // Send a JSON response with additional information
      } else {
        // Authentication failed
        res.status(401).json({ message: 'Login failed' }); // Send a JSON response with a message
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Send a JSON response with an error message
    }
  });

app.listen(5000, function () {
    console.log('Server started at port 5000');
   })