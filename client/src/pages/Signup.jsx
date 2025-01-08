import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser, signup, authUser, checkAuth } = useAuthStore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    const data = await signup(formData)
    if (data.success) {
      navigate("/login")
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed up with Google:", user);
      setUser({ email: user.email, uid: user.uid });
      navigate("/login"); // Navigate to a dashboard or homepage
    } catch (error) {
      console.error("Error during Google sign-up:", error.message);
    }
  };

  useEffect(() => {
    if(authUser && authUser.role === "admin"){
      navigate("/admin")
    }
    else if(authUser && authUser.role === "user"){
      navigate("/publish")
    }
  },)

  return (
    <div className="flex justify-center items-center text-black min-h-screen font-sans" style={{ background: '#343434' }}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Sign Up
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleEmailSignUp}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="p-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleSignUp}
          className="p-3 w-full mt-4 bg-red-500 text-white rounded-lg focus:outline-none focus:ring-2 hover:bg-red-600"
        >
          Sign Up with Google
        </button>
        <p className="text-sm text-black font-medium text-center mt-4">
          Already Registered?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
