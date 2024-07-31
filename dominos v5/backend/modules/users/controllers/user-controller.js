// importing the userModel, this contains the user Schema
import userModel from '../models/user.model.js';

// function for signup
export const userSignup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = new userModel({ email, password, username });
    await user.save();
    // req.session.userId = user._id;
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error); 
    res.status(400).json({ message: 'Error creating user' });
  }
}

// function for login
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (user.password === password) {
      // req.session.userId = user._id;
      res.status(200).json({ message: 'Logged in successfully' });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error); 
    res.status(400).json({ message: 'Error logging in' });
  }
}

// function for logout
export const userLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(400).json({ message: 'Error logging out' });
    } else {
      res.status(200).json({ message: 'Logged out successfully' });
    }
  });
}

// function for checking the session
export const checkSession = async (req, res) => {
  console.log('Session in check-session route:', req.session); // Log the session for debugging
  if (req.session.userId) {
    try {
      const user = await userModel.findById(req.session.userId);
      if (user) {
        res.status(200).json({ username: user.username });
      } else {
        res.status(401).json({ message: 'Session expired' });
      }
    } catch (error) {
      console.error('Check session error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
}