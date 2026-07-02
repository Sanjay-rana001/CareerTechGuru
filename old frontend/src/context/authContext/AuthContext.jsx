import { createContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [role, setRole] = useState(sessionStorage.getItem('role') || '');
  const [loading, setLoading] = useState(false);

  const setAuthData = (token, role, userData) => {
    setToken(token);
    setRole(role);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('role', role);
    sessionStorage.setItem('data', JSON.stringify(userData));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setAuthData(token, userData.role, { _id: user.uid, ...userData });
          }
        } catch (error) {
          console.error("Error fetching user data in onAuthStateChanged:", error);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const AuthenticateUser = async (credentials) => {
    setLoading(true);
    try {
      let email = credentials.email.trim();
      
      // If the user inputs a username (doesn't contain '@'), look up their email from Firestore
      if (!email.includes('@')) {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          throw new Error("No user found with this username.");
        }
        
        const userDoc = querySnapshot.docs[0];
        email = userDoc.data().email;
      }
      
      const userCredential = await signInWithEmailAndPassword(auth, email, credentials.password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        throw new Error("User profile not found in Firestore.");
      }
      
      const userData = userDoc.data();
      setAuthData(token, userData.role, { _id: user.uid, ...userData });
      toast.success("Login successful");
      setLoading(false);
      return { token, user: { _id: user.uid, ...userData } };
    } catch (error) {
      toast.error(error.message || "Invalid credentials. Please try again.");
      setLoading(false);
      throw error;
    }
  };

  const RegisterUser = async (credentials) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      
      const userData = {
        firstName: credentials.firstName || "",
        lastName: credentials.lastName || "",
        email: credentials.email,
        mobile: credentials.mobile || "",
        username: credentials.username || "",
        country: credentials.country || "",
        role: credentials.role || "user"
      };
      
      await setDoc(doc(db, "users", user.uid), userData);
      
      setAuthData(token, userData.role, { _id: user.uid, ...userData });
      toast.success("Registration successful");
      setLoading(false);
      return { token, user: { _id: user.uid, ...userData } };
    } catch (error) {
      toast.error(error.message || "Unexpected error during registration");
      setLoading(false);
      throw error;
    }
  };

  const verifyUserEmail = async (otp) => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setLoading(false);
        return { token, user: { _id: user.uid, ...userDoc.data() } };
      }
      setLoading(false);
      return null;
    } catch (error) {
      console.error("Error verifying email:", error);
      setLoading(false);
      return null;
    }
  };

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent to email.");
      return { status: 200 };
    } catch (error) {
      console.error("Error in forgot password:", error);
      toast.error(error.message || "Failed to send reset link.");
      return null;
    }
  };

  const verifyOtpForPasswordReset = async (otp) => {
    return { status: 200 };
  };

  const resetPassword = async (email, newPassword) => {
    toast.success("Password reset link already sent. Please use the link to reset your password.");
    return { status: 200 };
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      sessionStorage.clear();
      setToken('');
      setRole('');
      toast.success("Logged out successfully");
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      AuthenticateUser, 
      RegisterUser, 
      verifyUserEmail, 
      forgotPassword, 
      verifyOtpForPasswordReset, 
      resetPassword, 
      token, 
      role, 
      logoutUser,
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
