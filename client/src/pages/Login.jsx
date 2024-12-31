import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState(""); // Full Name for Signup
    const [showPass, setShowPass] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // Track if it's login or signup form
    const { login, signup } = useAuthStore();
    const navigate = useNavigate(); // Initialize navigate

    const handleAuth = async (e) => {
        e.preventDefault();

        // For signup, check if fullName is provided
        if (!isLogin && !fullName) {
            console.log("Full Name is required!");
            return;
        }

        const authData = { email, password, fullName }; // Include fullName in signup

        let response;

        if (isLogin) {
            response = await login(authData);
        } else {
            response = await signup(authData);
        }

        if (response.success) {
            console.log(`${isLogin ? "Login" : "Signup"} successful: `, response.message);

            // Redirect to PublishStory page after successful login
            
                navigate('/publish'); // Adjust this path based on your routing setup
            
        } else {
            console.log(`${isLogin ? "Login" : "Signup"} failed: `, response.message);
        }
    };

    return (
        <div className='w-full h-[calc(100vh-112px)] flex justify-center items-center'>
            <form onSubmit={handleAuth} className='flex flex-col bg-black p-4 w-[350px] h-[400px] rounded-md'>
                <h4 className='text-center text-2xl mb-4'>{isLogin ? "LOGIN" : "SIGNUP"}</h4>

                {/* Show Full Name field only if Signup */}
                {!isLogin && (
                    <input 
                        type="text" 
                        value={fullName} 
                        className='w-full border-2 rounded-md mb-4 p-2 text-black' 
                        onChange={(e) => setFullName(e.target.value)} 
                        placeholder='Full Name' 
                        required={!isLogin}  // Only required for signup
                    />
                )}

                {/* Email Field */}
                <input 
                    type="email" 
                    value={email} 
                    className='w-full border-2 rounded-md mb-4 p-2 text-black' 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='example@gmail.com' 
                    required
                />

                {/* Password Field */}
                <div className='relative'>
                    <input 
                        type={showPass ? "text" : "password"} 
                        value={password} 
                        className='w-full border-2 rounded-md mb-4 p-2 text-black' 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='* * * * * *' 
                        required
                    />
                    {showPass ? (
                        <FaRegEye className='absolute top-4 right-5' onClick={() => setShowPass(!showPass)} />
                    ) : (
                        <LuEyeClosed className='absolute top-4 right-5' onClick={() => setShowPass(!showPass)} />
                    )}
                </div>

                {/* Submit Button */}
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md mb-4'>
                    {isLogin ? "LOGIN" : "SIGNUP"}
                </button>

                {/* Toggle Between Login and Signup */}
                <div className='text-center'>
                    <span 
                        className='text-blue-500 cursor-pointer' 
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
