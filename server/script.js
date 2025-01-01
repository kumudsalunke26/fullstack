
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const cloudinary = require('cloudinary').v2;
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const __dirname = path.resolve();
// const path=require('path');
// // Import the routes from stories.js
// const storiesRoutes = require('./routes/stories');
// const userRoutes = require("./routes/user-route")

// const app = express();



// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.json());
// app.use(cookieParser())



// app.use(cors(
//   {
//   origin: "http://localhost:5173", // Replace with your frontend's URL
//   credentials: true, // Allow cookies and authentication headers
// }
// ));




// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });
// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Use the routes defined in stories.js
// app.use('/api/stories', storiesRoutes);
// app.use('/api/auth', userRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
//   });
// }

// // Set up the server to listen on the specified port
// const PORT = process.env.PORT || 8401;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require('path');

// Resolve the directory name for serving static files
const __dirname = path.resolve();

// Import the routes
const storiesRoutes = require('./routes/stories');
const userRoutes = require("./routes/user-route");

const app = express();

// Middleware setup
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend's URL
  credentials: true, // Allow cookies and authentication headers
}));

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

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
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}

// Start the server
const PORT = process.env.PORT || 8401;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
