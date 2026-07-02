const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');
const path = require('path');

const serviceAccount = require(path.join(__dirname, 'backend', 'serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);
const auth = getAuth(app);

const EMAIL = "sanjayranatanabana@gmail.com";
const PASSWORD = "Sanjay@321";

async function createSuperAdmin() {
  try {
    let userRecord;
    try {
      // Check if user already exists
      userRecord = await auth.getUserByEmail(EMAIL);
      console.log('User already exists in Firebase Auth. Updating password...');
      await auth.updateUser(userRecord.uid, { password: PASSWORD });
    } catch (e) {
      if (e.code === 'auth/user-not-found') {
        console.log('User not found. Creating new Firebase Auth user...');
        userRecord = await auth.createUser({
          email: EMAIL,
          password: PASSWORD,
          emailVerified: true,
          displayName: "Super Admin"
        });
      } else {
        throw e;
      }
    }

    // Now update the Firestore 'users' collection to set the role
    console.log('Setting user role to superadmin in Firestore...');
    await db.collection('users').doc(userRecord.uid).set({
      email: EMAIL,
      role: 'superadmin',
      firstName: 'Super',
      lastName: 'Admin',
      createdAt: new Date().toISOString()
    }, { merge: true });

    console.log(`\n✅ SUCCESSFULLY CONFIGURED SUPER ADMIN!`);
    console.log(`You can now log into the website with:`);
    console.log(`Email:    ${EMAIL}`);
    console.log(`Password: ${PASSWORD}`);
    
  } catch (error) {
    console.error("Error making superadmin:", error);
  }
}

createSuperAdmin();
