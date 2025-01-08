const bcrypt = require("bcryptjs")
const { generateFirebaseToken } = require("../utils/generateToken")
const axios = require('axios'); // Install axios if not already installed
const { db, auth } = require("../firebase/firebase")
const admin = require('firebase-admin');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists in Firebase Authentication
    const userRecord = await auth.getUserByEmail(email).catch(() => null);
    if (userRecord) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user in Firebase Authentication
    const userCredential = await auth.createUser({
      email,
      password,
    });
    const uid = userCredential?.uid;  // Get user UID from Firebase Authentication
    if (!uid) {
      return res.status(500).json({ message: 'Failed to retrieve user ID' });
    }

    // Store additional user data in Firestore
    const userRef = db.collection('users').doc(uid);
    await userRef.set({
      name,
      email,
      role : 'user',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const userSnapShot = await userRef.get()
    const userData = userSnapShot.data()

    if (!userData) {
      return res.status(400).json({ success: false, message: "Unable to fetch userData" })
    }

    generateFirebaseToken(res, uid, userData, 'signup')
    return
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Send a request to Firebase Authentication's REST API for login
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API}`,
      {
        email,
        password,
        returnSecureToken: true, // Ensures we get an ID token in the response
      }
    );

    const { idToken, localId } = response.data;

    // Fetch additional user data from Firestore
    const userRef = db.collection('users').doc(localId);
    const userSnapShot = await userRef.get();
    const userData = userSnapShot.data();

    if (!userData) {
      return res.status(400).json({ success: false, message: 'User data not found' });
    }

    // Generate Firebase Custom Token for the authenticated user
    generateFirebaseToken(res, localId, userData, 'login');
    return
  } catch (error) {
    console.error('Login error:', error.message);

    // Handle specific Firebase authentication errors
    if (error.response && error.response.data && error.response.data.error) {
      const errorCode = error.response.data.error.message;
      if (errorCode === 'EMAIL_NOT_FOUND') {
        return res.status(400).json({ message: 'No user found with this email' });
      } else if (errorCode === 'INVALID_PASSWORD') {
        return res.status(400).json({ message: 'Incorrect password' });
      }
    }

    return res.status(500).json({ message: 'Login failed. Please try again later.', error: error.message });
  }
};



const logout = (req, res) => {
  try {
    // Remove the authorization header (JWT token) from the response
    res.setHeader('Authorization', '');  // Clearing the token from the header

    // Send a response indicating the user has been logged out
    return res.status(200).json({
      success: true,
      message: 'User logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Logout failed. Please try again later.',
      error: error.message
    });
  }
};


const checkAuth = async (req, res) => {
  try {
    const user = req.userData
    if (!user) {
      return res.status(400).json({ success: false, message: "User is Unauthorized" })
    }
    return res.status(200).json({
      success: true, message: "User is Authorized", user
    })
  }
  catch (error) {
    console.log("Error while checking auth", error.message)
    return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
  }
}



module.exports = {
  signup,
  login,
  logout,
  checkAuth
}