const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account key
const serviceAccount = require('./serviceAccountKey.json'); // Adjust the path as needed

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export the Firestore database reference
const db = admin.firestore();

module.exports = { db };
