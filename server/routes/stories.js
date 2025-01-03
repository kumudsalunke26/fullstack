const express = require('express');
const router = express.Router();
const { Story } = require('../models/items'); // Import Story model
// const multer = require('multer');
const fs = require('fs');
const { protectRoute } = require('../middleware/protectAuth');
const cloudinary = require("../cloudinary/cloudinary")


// Multer configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// Route to upload files
// router.post('/upload', protectRoute, upload.single('file'), async (req, res) => {
//   try {
//     // Upload file to Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: 'stories',
//     });

//     // Delete the local file after upload
//     fs.unlinkSync(req.file.path);

//     // Send Cloudinary response
//     res.status(200).json({ imageUrl: result.secure_url, publicId: result.public_id });
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     res.status(500).json({ error: 'Failed to upload file' });
//   }
// });

router.get('/pending', protectRoute, async (req, res) => {
  try {
    const pendingStories = await Story.find({ status: 'pending' });
    res.status(200).json({ pendingStories });
  } catch (error) {
    console.error('Error fetching pending stories:', error);
    res.status(500).json({ error: 'Failed to fetch pending stories' });
  }
});

// Route to publish a story with media
router.post('/publish', protectRoute, async (req, res) => {
  const { title, content, imageUrl } = req.body;

  try {
      // Upload the image to Cloudinary
      const cloudinaryRes = await cloudinary.uploader.upload(imageUrl);
      const uploadedUrl = cloudinaryRes.secure_url;

      // Create a new story with the user's ID and details
      const newStory = new Story({
          userId: req.user._id,
          title,
          authorName: req.user.fullName,
          content,
          imageUrl: uploadedUrl,
          status: 'pending', // Story status is pending for review
      });

      // Save the story to the database
      await newStory.save();

      res.status(201).json({ success: true, message: 'Story submitted for review!' });
  } catch (error) {
      console.error('Error publishing story:', error);
      res.status(500).json({ success: false, message: 'Failed to submit story' });
  }
});


// router.post('/publish', protectRoute, async (req, res) => {
//   const { title, content, imageUrl } = req.body;
  
//   let uploadedUrl;
//   const cloudinaryRes = await cloudinary.uploader.upload(imageUrl)
//   uploadedUrl = cloudinaryRes.secure_url


//   try {
//     const newStory = new Story({
//       userId : req.user._id,
//       title,
//       authorName : req.user.fullName,
//       content,
//       imageUrl : uploadedUrl,
//       status: 'pending', // Set the status to 'pending' initially
//     });
//     await newStory.save();

//     res.status(201).json({ message: 'Story submitted for review!'});
//   } catch (error) {
//     console.error('Error publishing story:', error);
//     res.status(500).json({ error: 'Failed to submit story' });
//   }
// });

// Route to fetch approved stories
router.get('/approved', async (req, res) => {
  try {
    const approvedStories = await Story.find({ status: 'approved' });
    res.status(200).json({ approvedStories });
  } catch (error) {
    console.error('Error fetching approved stories:', error);
    res.status(500).json({ error: 'Failed to fetch stories' });
  }
});

// Route to approve a story
router.patch('/approve/:id', protectRoute, async (req, res) => {
  try {
    const updatedStory = await Story.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    res.status(200).json(updatedStory);
  } catch (error) {
    console.error('Error approving story:', error);
    res.status(500).json({ error: 'Failed to approve story' });
  }
});

module.exports = router;
