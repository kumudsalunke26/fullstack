const express = require('express');
const router = express.Router();
const { Story } = require('../models/items'); // Import Story model
// const multer = require('multer');
const fs = require('fs');
const { protectRoute } = require('../middleware/protectAuth');
const cloudinary = require("../cloudinary/cloudinary")
const {getAllpendingStories,publishStory,getAllApprovedStories,updateTheStatus} = require("../controllers/stories-controllers")



router.get('/pending',protectRoute,getAllpendingStories) 

// Route to publish a story with media
router.post('/publish', protectRoute, publishStory)

// Route to fetch approved stories
router.get('/approved', getAllApprovedStories)

// Route to approve a story
router.patch('/approve/:id', protectRoute, updateTheStatus )

module.exports = router;
