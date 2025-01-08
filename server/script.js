const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require('path');



const __dirname1 = path.resolve()
console.log(__dirname1)
const storiesRoutes = require('./routes/stories-routes');
const userRoutes = require("./routes/user-route");

const app = express();

const frontendUrl = process.env.FRONTEND_URL;

// Middleware setup
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: frontendUrl, // Replace with your frontend's URL
  credentials: true, // Allow cookies and authentication headers
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow custom headers like Authorization
}));

// Root route
// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/stories', storiesRoutes);
app.use('/api/auth', userRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname1, "../client", "dist", "index.html"));
  });
} else {
  app.get("*", (req, res) => {
    res.send("Backend is running");
  });
}

// Start the server
const PORT = process.env.PORT || 8401;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



