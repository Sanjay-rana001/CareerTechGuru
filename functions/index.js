const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// 1. Email Notification Function
// This triggers when a new application is added to Firestore
exports.sendApplicationEmail = functions.firestore
  .document("applications/{applicationId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    // In a real production app, configure a secure SMTP like SendGrid or Resend in Firebase environment config.
    // For now, this is a placeholder mail transport config.
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "apikey",
        pass: "your_smtp_password",
      },
    });

    try {
      // Send to Employer
      await transporter.sendMail({
        from: '"CareerTechGuru" <noreply@careertechguru.com>',
        to: data.employerEmail || "employer@example.com", // Assuming employerEmail is saved in application, otherwise fetch it
        subject: `New Application for ${data.jobTitle}`,
        text: `Hello, you have received a new application from ${data.userName} for the position of ${data.jobTitle}. Log in to view their resume.`,
      });

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });

// 2. Set Custom Claims (Role Management)
// A callable function an admin or specific setup process can call to securely set roles.
exports.setCustomUserRole = functions.https.onCall(async (data, context) => {
  // Ensure the user calling this is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "Only authenticated users can request roles.",
    );
  }

  const { targetUid, role } = data; // role should be 'employer' or 'employee'

  if (!targetUid || typeof targetUid !== "string") {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with a valid targetUid.",
    );
  }

  // Security check: Ensure the user is setting their own role, or they are an admin
  if (context.auth.uid !== targetUid && !context.auth.token.admin) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "You do not have permission to set this role.",
    );
  }

  if (role !== "employer" && role !== "employee") {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Role must be employer or employee.",
    );
  }

  try {
    await admin.auth().setCustomUserClaims(targetUid, { role: role });
    return {
      message: `Successfully assigned role ${role} to user ${targetUid}.`,
    };
  } catch (error) {
    console.error("Error setting custom claim:", error);
    throw new functions.https.HttpsError("internal", error.message);
  }
});
