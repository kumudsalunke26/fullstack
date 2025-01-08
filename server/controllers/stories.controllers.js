const { auth, db } = require("../firebase/firebase");
const cloudinary = require('cloudinary')

// Get all pending stories
const getAllpendingStories = async (req, res) => {
    try {
        const pendingStoriesSnapshot = await db.collection('stories')
            .where('status', '==', 'pending')
            .get();

        const pendingStories = [];
        pendingStoriesSnapshot.forEach((doc) => {
            pendingStories.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json({ success: true, pendingStories });
    } catch (error) {
        console.error('Error fetching pending stories:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch pending stories' });
    }
};

// Publish a story
const publishStory = async (req, res) => {
    const { title, content, imageUrl } = req.body;

    try {
        // Upload the image to Cloudinary
        const cloudinaryRes = await cloudinary.uploader.upload(imageUrl);
        const uploadedUrl = cloudinaryRes.secure_url;

        // Create a new story document in Firestore
        const newStory = {
            userId: req.user.uid,
            title,
            authorName: req.userData.name,
            content,
            imageUrl: uploadedUrl,
            status: 'pending', // Story status is pending for review
            createdAt: new Date(),
        };

        const storyRef = await db.collection('stories').add(newStory);

        res.status(201).json({ success: true, message: 'Story submitted for review!', id: storyRef.id });
    } catch (error) {
        console.error('Error publishing story:', error);
        res.status(500).json({ success: false, message: 'Failed to submit story' });
    }
};

// Get all approved stories
const getAllApprovedStories = async (req, res) => {
    try {
        const approvedStoriesSnapshot = await db.collection('stories')
            .where('status', '==', 'approved')
            .get();

        const approvedStories = [];
        approvedStoriesSnapshot.forEach((doc) => {
            approvedStories.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json({ success: true, approvedStories });
    } catch (error) {
        console.error('Error fetching approved stories:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch stories' });
    }
};

// Update the status of a story to 'approved'
const updateTheStatus = async (req, res) => {
    const storyId = req.params.id;

    try {
        const storyRef = db.collection('stories').doc(storyId);
        const storyDoc = await storyRef.get();

        if (!storyDoc.exists) {
            return res.status(404).json({ success: false, error: 'Story not found' });
        }

        await storyRef.update({ status: 'approved' });

        res.status(200).json({ success: true, message: 'Story approved successfully!' });
    } catch (error) {
        console.error('Error approving story:', error);
        res.status(500).json({ success: false, error: 'Failed to approve story' });
    }
};

module.exports = {
    getAllApprovedStories,
    publishStory,
    getAllpendingStories,
    updateTheStatus,
};
