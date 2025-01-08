const { auth } = require("../firebase/firebase")
function generateFirebaseToken(res, uid, userData, method) {
    try {
        // Generate a Firebase custom token for the provided UID
        auth.createCustomToken(uid).then((customToken) => {
            // Return the token in the Authorization header
            console.log("customToken", customToken)
            if (method === 'signup') {
                return res.status(200).json({
                    success: true,
                    token: customToken,
                    user: {
                        uid: userData.uid,
                        name: userData.name,
                        email: userData.email
                    },
                    message: 'User created successfully',
                });
            } else if (method === 'login') {
                return res.status(200).json({
                    success: true,
                    token: customToken,
                    user: {
                        uid: userData.uid,
                        name: userData.name,
                        email: userData.email,
                        role:userData.role
                    },
                    message: 'User logged in successfully',
                });
            }

            console.log('Firebase custom token generated:', customToken);
        })
            .catch((error) => {
                console.error('Error generating Firebase custom token:', error.message);
                res.status(500).json({ success: false, message: 'Token generation failed', error: error.message });
            });
    } catch (error) {
        console.error('Error in generateFirebaseToken:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }

}

module.exports = {
    generateFirebaseToken
}
