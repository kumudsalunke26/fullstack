const { auth, db } = require("../firebase/firebase");

const protectRoute = async (req, res, next) => {
    try {
        console.log('Headers received:', req.headers);

        // Retrieve the token from the `Authorization` header
        const authHeader = req.headers.authorization;
        console.log("authHeader in protectrouter ",authHeader);

        // Check if the Authorization header exists and contains a Bearer token
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res
                .status(401)
                .json({ success: false, message: 'User is not authorized. Token not found.' });
        }

        // Extract the custom token
        const token = authHeader.split(' ')[1];

        // Verify the custom token
        const decodedToken = await auth.verifyIdToken(token).catch((error) => {
            console.error('Error verifying custom token:', error.message);
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired token.',
            });
        });

        // Fetch user details from Firebase Auth (optional, can be avoided if you don't need extra details)
        const firebaseUser = await auth.getUser(decodedToken.uid).catch((error) => {
            console.error('Error fetching user from Firebase:', error.message);
            return res.status(401).json({
                success: false,
                message: 'User not found in Firebase Authentication.',
            });
        });

        // Fetch user data from Firestore (for example, fetch user details from a collection)
        const userDoc = await db.collection("users").doc(decodedToken.uid).get();

        if (!userDoc.exists) {
            return res.status(404).json({
                success: false,
                message: 'User data not found in Firestore.',
            });
        }

        const userData = userDoc.data();

        // Attach the decoded token, user details, and Firestore data to the request object
        req.user = firebaseUser; // Full Firebase user details
        req.userData = userData; // Firestore user data

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Error in protectRoute middleware:', error.message);
        return res
            .status(500)
            .json({ success: false, message: 'Internal server error during authorization.' });
    }
};

module.exports = {
    protectRoute,
};

