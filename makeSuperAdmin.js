const admin = require('firebase-admin');

// 1. Point to your service account key
const serviceAccount = require('./backend/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 2. Put your email address here
const MY_EMAIL = "your-email@example.com"; 

async function makeSuperAdmin() {
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', MY_EMAIL).get();

    if (snapshot.empty) {
      console.log(`No user found with email: ${MY_EMAIL}`);
      return;
    }

    // Update the role to superadmin
    const userDoc = snapshot.docs[0];
    await userDoc.ref.update({
      role: 'superadmin'
    });

    console.log(`✅ Successfully granted SuperAdmin privileges to ${MY_EMAIL}!`);
    console.log("You can now log in and access /admin-dashboard.");
  } catch (error) {
    console.error("Error making superadmin:", error);
  }
}

makeSuperAdmin();
