import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider, signInWithCustomToken } from "firebase/auth";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser, login, setToken, authUser, checkAuth } = useAuthStore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);
      if (response?.success && response?.user?.role) {
        if (response.user.role === "user") {
          try {
            await signInWithCustomToken(auth, response.token);
            const idToken = await auth.currentUser.getIdToken();
            if (idToken) {
              setToken(idToken);
              navigate("/publish");
            } else {
              console.error("Failed to retrieve ID token");
            }
          } catch (authError) {
            console.error("Authentication failed:", authError);
          }
        } else if (response.user.role === "admin") {
          try {
            await signInWithCustomToken(auth, response.token);
            const idToken = await auth.currentUser.getIdToken();
            if (idToken) {
              setToken(idToken);
              navigate("/admin");
            } else {
              console.error("Failed to retrieve ID token");
            }
          } catch (authError) {
            console.error("Authentication failed:", authError);
          }
        } else {
          console.error("Unexpected role:", response.user.role);
        }
      } else {
        console.error("Login failed or invalid response:", response);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  useEffect(() => {
    if (authUser && authUser.role === "admin") {
      navigate("/admin")
    }
    else if (authUser && authUser.role === "user") {
      navigate("/publish")
    }
  },)



  return (
    <div className="flex justify-center items-center min-h-screen text-black font-sans" style={{ background: '#343434' }}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Welcome Back!
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
            className="p-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2 "
          >
            Login
          </button>
          <p className="text-sm text-black font-medium text-center mt-4">
            Do you have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
