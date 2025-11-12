import React, { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signIn with google============
  const signInWithGooglePopUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google sign-in successful!");
        return result;
      })
      .catch((error) => {
        toast.error(error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  //  create user or register =====================
  const registerFn = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        sendEmailVerification(result.user).then(() => {
          toast.success("Verification email sent. Please check your inbox.");
        });
        return result;
      })
      .catch((error) => {
        toast.error(error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  // login with email/password
  const loginWithEmailAndPasswordFn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          toast.error("Please verify your email before logging in.");
          throw new Error("Email not verified");
        }
        return result;
      })
      .catch((error) => {
        toast.error(error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  // update user
  const updateUser = (updateData) => {
    updateProfile(auth.currentUser, updateData);
  };

  // prifule update function =====================
  const handleUpdateProfile = async (newName) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: newName,
      });

      setUser({ ...auth.currentUser });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    }
  };
  // Logout =====================
  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        toast.success("logout success");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  // forget Function
  const resetPasswordFn = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };
  // onAuthStateChang===========
  useEffect(() => {
    const unSubdcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unSubdcribe;
  }, []);

  // data send =====
  const authData = {
    signInWithGooglePopUp,
    user,
    setUser,
    logout,
    registerFn,
    loginWithEmailAndPasswordFn,
    loading,
    updateUser,
    handleUpdateProfile,
    resetPasswordFn,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
